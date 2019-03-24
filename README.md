# Digital Ocean Spaces Node.Js Example
This is an example project showing how to interact with [Digital Ocean Spaces](https://www.digitalocean.com/products/spaces/) from a Node.Js Express app.

It relies on the official AWS S3 SDK to upload and download files from a Space.

🚨 **Note that this is purely sample code** - we don't claim to be showing best practices with this, nor should you ship this code as-is without first testing it yourself. It's meant to demonstrate _how_ you can connect to a Space using the S3 SDK, not how to build a Node.Js app.

This sample source code forms part of the Getting Started with Spaces course by The Cloud Hub.

## Getting started
To run this sample code:
1. Make sure you have Node installed. If not, run:
```
brew install node
```
2. Navigate to the root directory and run:
```
npm install && npm start
```
The project should run, and you'll be able to upload and download the sample image using the included Postman collection (see the `Postman Collection` directory).
