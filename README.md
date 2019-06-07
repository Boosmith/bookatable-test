# Bookatable Node.js API test solution

### Summary

- Simple Node.js search api using Express.
- Version v0.3.0

### Set up

- This is pretty straightforward to set up.

1. Clone the repo, it doesn't matter where really.
2. Then `$ cd express-search`
3. **Dependencies**.  
    Ensure version of Node is latest. Should be `v11.0` or higher. This is because the version of
   package `readline` has dependencies on `v11.0` or higher.
   The version I developed in was `v12.2.0`.

4. Run `npm install`
5. To start api server run `npm start`.

### Usage

Use Postman or your favourite API test tool.
An example test url is http://localhost:3000/search/users?q=grif which will return all names with `lastName` starting with `grif`.
