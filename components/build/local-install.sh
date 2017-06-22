#!/usr/bin/env bash
echo "Installing dependencies"
npm install yarn
yarn install

echo "Initializing design system"
rm astrum-config.json
./node_modules/.bin/astrum init chefkoch-design-system
cd chefkoch-design-system
rm -rf components
rm -rf pages
rm -rf assets
rm data.json
ln -sf ../../app/documentation/* .
ln -sf ../../app/assets .
cd ..

echo "Generating assets"
./node_modules/.bin/gulp build
