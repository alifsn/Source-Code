# Source-Code Rest-API

##Requirements
* Node, npm, MySql

##Description
This rest-api is created based on NodeJs and MySql for database. This rest-api consist of:
###/cart
This API support for request method Get,Post, dan Delete cart item
###/total-purchase
This API is used to calculate the total of payment but already included to calculate the diskon

##Installation

* Clone the repo : git clone  https://github.com/alifsn/Source-Code.git
* Create schema database using query sql on file db_store.sql
* Make sure before run application, already connect to internet, internet connection is needed to connect to local database
* Start the server : node Server.js atau dapat juga dijalankan dengan 'npm start'

##Testing
For testing this rest-api there is two option via unit test and via rest-api(I use Postman)
- To run via unit test, just write "mocha" in the command prompt
- To run via rest-api, you should import the json to postman, then you can use to test the rest-api

---------********--------
