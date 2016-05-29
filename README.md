#  GitHub User Lookup w/ Modern JS

#### A webiste that displays the Github users information. 5/27/2016

#### By _Reed Lambier_

## Description

A website where you can enter the username of a Github user and it will display their github profile on the page for your viewing while utilizing the technologies of the Github API.

## Setup/Installation Requirements

* Link to repository: https://github.com/Rlambier25/JS-Week1-codeReview
* Clone or download this repository to your desktop
* cd JS-Week1-codeReview
* Make sure Node.js installed on your computer
* In your terminal run: **npm install, bower install, gulp build, and gulp serve**
* A local web server should automatically open in your browser

## Setup API Requirements

* You need to get your own the GitHub API key. You can look the the github API overview through the link here: https://developer.github.com/v3/

* You may retrieve a API token through here: https://dl.dropboxusercontent.com/s/qk0qcsy487yg7ci/githubgeneratetoken.png?dl=0

* You will need to store the key in a local file with the same filename and location.

* You must name your API key variable _exports.apiKey_ in your .env file (hidden file) and store it in the root of the project directory.

* Create a file in the top level of your project directory called .env file to hold our API key. This is a common file extension for a configuration file used to set up environmental variables. Paste your API key in your .env file that you just created and store it in an exported property named apiKey.

* _API key .env (hidden file) file example:_
**exports.apiKey = "YOUR-API-KEY-GOES-HERE";**

* _In your [insert_name_here].js file that gets access to the API key, add the following requirement:_
**var apiKey = require('./../.env').apiKey;**

##Setup Node & Launch server. Once Node is installed and your API is working you must run the following through your terminal:

* npm install -g
* bower install
* gulp build
* gulp serve (server should launch localhost:3000 automatically in browser).


## Known Bugs

Still trying to get .gitignore file to comply with github. Finished on home computer and having unknown issues. If you locate an error please email me at Rlambier46@gmail.com

## Support and contact details

Feel free to contact me with questions or suggestions and contribute to the code.

## Technologies Used

* Git
* Github
* Atom text editor
* JavaScript
* bower
* Node.js - including npm and bower

### License

_This software is licensed under the MIT license_

Copyright (c) 2016 _Reed Lambier_
