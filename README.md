![Build Status](https://travis-ci.org/tboyce/protractor_demo.svg?branch=master)

## Setup ##
```
npm install -g gulp
npm install
```

## Building the automation code ##
This is mainly done to validate your automation code and to allow WebStorm to detect and autocomplete steps. If you are just running the tests, you don't need to do this.

Build one time with `gulp build`  
Watch for changes and rebuild with `gulp watch`

## Running the tests ##
To run the tests you must have Java installed and available in your path.
```
gulp test
```
