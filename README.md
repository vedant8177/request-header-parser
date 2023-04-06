# Request Header Parser

## Live Demo
You can see a live demo of this project at https://request-header-parser.vedantsapalkar.repl.co.

The Request Header Parser Microservice is a full stack JavaScript app that retrieves the user's IP address, preferred language, and system information by analyzing the request headers sent by the user's browser.

Technologies Used
- Node.js
- Express
- HTML
- CSS
- JavaScript

## Features
- Retrieves user's IP address, preferred language, and system information
- Displays JSON response in a user-friendly way
- Provides a link to the GitHub repository of the project

## API Endpoints

`GET /api/whoami`

Returns a JSON object with the following keys:

- `ipaddress` - the IP address of the client requesting the service.
- `language` - the preferred language of the client requesting the service.
- `software` - the operating system and browser used by the client requesting the service.

Example response:
```
{
  "ipaddress": "192.168.1.1",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36"
}
```

## Getting Started
To run this project on your local machine, follow these steps:

Clone the repository to your local machine
```
https://github.com/vedant8177/request-header-parser
```
Install the dependencies
```
cd request-header-parser-microservice
npm install
```
Start the server
```
node server.js
```
Open the app in your web browser at http://localhost:3000
