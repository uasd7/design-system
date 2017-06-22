#!/usr/bin/env bash
echo "Installing dependencies"
npm install yarn
yarn install

echo "Initializing design system"
./node_modules/.bin/astrum init chefkoch-design-system
cp -rf ./documentation/* ./chefkoch-design-system/

echo "Generating assets"
./node_modules/.bin/gulp build
