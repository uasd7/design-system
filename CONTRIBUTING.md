# Development and Contributing guidelines

## Contents
* [Installation](#installation)
* [Development](#development)
* [Running Tests](#running-tests)

## Installation
Install the gulp-cli globally (if you haven't already)

    npm install -g gulp-cli

Checkout the repository and and install npm dependencies

    npm install

Finally build the design system with gulp

    gulp build


## Development

### Directory structure
| Directory | Description |
| --- | --- |
| `app` | Contains the "Design System" astrum app |
| `app/components` | Contains the pattern descriptions and example markup |
| `app/pages` | As the name suggests, info and content pages |
| `patterns` | Contains the actual pattern source code, momentarily only Sass |

### Requirements
* NodeJS

Serve the design system locally via Browsersync:

    gulp serve

and then start the application on:

    http:/localhost:3000

## Running Tests
Work in progress.