#  import-service-plugin-starter-pack
>Starter pack for a Node/Express based plugin for the Moosend import service

This is a node/express based starter pack for those who want to develop plugins for Moosend import service using Node, Express and Typescript. Before we continue with the explanation please read the [Import Service documentation](http://www.google.com) first, because without that this starter pack has no meaning, it is very easy to undestand. The starter pack includes a project structure, setups and commands for typescript tasks like compilation and errors, tesing framework and testing commands for mocha and the necessary infrastructure and clearly defined Typesript interfaces for the data required by the Moosend import service as defined the in its documentation. All of this is explained in more detail below.


### Initialization

Please use the following command to install all local dependencies:
````
npm install
````
Please use the following command to install Typescript declaration files:
````
typings install
````
The server machine must also have typescript installed globally:
````
npm install -g typescript
````


### Available npm commands

To start the ts watcher and express server concurrently run the command below. This should be done only for development. You can also run 'npm run ts-watch' and 'npm run server-dev' in two separate terminal windows it has the same effect.
````
npm run start-dev
````

To build the project for production and start the server for production(meaning production config will be used)
````
npm run deploy
````

To run the test suite without generating a coverage report
````
npm test
````

To run the test suite and generate a coverage report
````
npm run test-coverage
````


To build the project for development and start a development server that watches for changes in JS code
````
npm run server-dev
````

To start in debugging mode
````
npm run debug
````

 To generate apidocs 
````
npm run generate-apidoc
````

To build the project(transpile typescript into JS in the dist folder)
````
npm run build
````


To watch for changes during development in typescript
````
npm run ts-watch
````

## Structure
### Config
Config files for each environment are located in the config folder. project config uses the [node-config](https://github.com/lorenwest/node-config) package. The json files located here correspond with the current environment.

### Source files
All project source typescript files are located in the 'src' folder, so you will be mostly working there.

#### 'data' folder
The 'data' folder contains all the interfaces and classes necessary as they are needed by the import service. For example the structure for the member data as the import service likes it, for the oauth tokens, plugin details etc etc. Please check them out for more info, there are comments everywhere.  This is just for helping the development process. Instead of defining your own from the beginning, you can use these, it is ez. The names of the files are similar to the routes because I tried to 'relate' the data types to the routes that will need them.

#### 'middleware' folder
Here the express middleware should be located, you can also add your own, but the important one is the one for error handling. I reccoment you implement error logic there.

#### 'routes' folder
This folder contains the routes for our application, here the routes that are needed by the import service are already defined and their handlers are located in the 'handlers' folder. Here you can use the apidoc comments to document your api methods. The import service will use this routes to communicate with your plugin. 

#### 'handlers' folder
Here the handlers for the routes are located. I put them separately here so that the code comes out cleaner in the end. There is 1 file for each of the routes defined in routes.js. The methods are empty and await your implementation. Here you will be doing most of the things like communicationg with external apis, validating data, returning responses in the format the import service requires. 

#### 'init' folder
Here only server.ts is located. It is basically an express server that uses https(These plugins work only with https). You don't have to change this file unless you want to disable CORS or add new stuff.

#### 'tests' folder
All tests should be located here and follow the same structure as the 'src' folder. The command to run tests and generate code-coverage reports are located at beginning of this document. Mocha, sinon and chai are used for testing.

#### 'util' folder
This is purely a utility folder, any helper functions or classes you can put in here. I also recommend putting here the utility methods for communications with external api and such. 



### HTTPS

Plugins will not work without https.


### API documentation

You can check out the api docs in <host>/api/docs.

### Code coverage report

Code coverage report in html is located in <root>/coverage/lcov-report/index.html and the report in JSON in <root>/coverage/coverage.json.