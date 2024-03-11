const sdk = require('node-appwrite')

const appwrite_api_key = process.env.APPWRITE_DEV_API_KEY
const appwrite_endpoint = process.env.APPWRITE_API_ENDPOINT
const appwrite_project_id = process.env.APPWRITE_PROJECT_ID

console.log(appwrite_api_key)
console.log(appwrite_endpoint)
console.log(appwrite_project_id)

let client = new sdk.Client()
    .setEndpoint(appwrite_endpoint)
    .setKey(appwrite_api_key)
    .setProject(appwrite_project_id)

const users = new sdk.Users(client);
const promise = users.list();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});