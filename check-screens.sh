#!/usr/bin/env bash

rm -rf screenshots/ screenshots.json screenshots.zip job.json

curl -o screenshots.json -u "$BROWSERSTACK_USER:$BROWSERSTACK_TOKEN" -H "Content-Type: application/json" -H "Accept: application/json"  -d @request.json  https://www.browserstack.com/screenshots

jobId=`cat screenshots.json | sed -e 's/.*job_id":"\(.*\)","screen.*/\1/'`

echo $jobId

if [[ ! -z "$jobId" ]]; then
    status="queued_all"

    while [ "$status" != "done" ]; do
        curl -o job.json -u "$BROWSERSTACK_USER:$BROWSERSTACK_TOKEN" -H "Content-Type: application/json" -H "Accept: application/json" https://www.browserstack.com/screenshots/$jobId.json
        status=`cat job.json | sed -e 's/.*"state":"\(.*\)","callback.*/\1/'`
        echo $status
        sleep 4
    done

    curl -o screenshots.zip https://www.browserstack.com/screenshots/$jobId/$jobId.zip
fi

unzip -d screenshots screenshots.zip
mv -f screenshots/archive*/* screenshots/
rm -rf screenshots/archive_*
docker run --rm -v $(pwd):/app -w="/app" openjdk:8-jre java -jar /app/ImageTester.jar -k $EYES_TOKEN -f /app/screenshots/
