# Bookatable NodeJS API test solution #

### Summary ###

* Solution for Bookatable test.
* Version v0.2.1

### Set up ###

* This is pretty straightforward to set up. 

1. Clone the repo, it doesn't matter where really.
2. Then `$ cd bookatable-test`
3. **Dependencies**.  
    Ensure version of Node is latest. Should be `v11.0` or higher. This is because the version of 
   package `readline` has dependencies on `v11.0` or higher. 
   The version I developed in was `v12.2.0`.

4. Run `npm install`
5. To start api server run `npm start` from the `/bookatable-test` folder.
6. I have set the app to use `port 3001`.

### Testing ###
 To test use Postman or your favourite API test tool. 
 An example test url is http://localhost:3001/search?q=wel which will return all names with `lastName` starting with `griff`.

