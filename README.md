This project is currently being hosted at [https://re-listings.vercel.app](https://re-listings.vercel.app) for ease of viewing. If you would like to host the website on your own, follow the instructions below:

## Installation Instructions:
To run the Real Estate Listing website locally, a few prerequisites are required:
NodeJS (latest stable): [https://nodejs.org](https://nodejs.org)
MongoDB (cloud or local): [https://www.mongodb.com/](https://www.mongodb.com/)
Clerk Account: [https://clerk.com/](https://clerk.com/)
UploadThing Account: [https://uploadthing.com/](https://uploadthing.com/)

Once NodeJS has been installed, you’ve setup a MongoDB database in the cloud or locally, you’ve signed up for a Clerk account and have your keys, and you’ve created an UploadThing Account and have your keys, follow the instructions below:
1. Clone the project to a local directory on your computer.
2. Install all the local dependencies by running `npm install` in the project's main directory.
3. Create a `.env` file in the main directory and add the following variables to the file:
  a. CLERK_SECRET_KEY = “your key”
  b. NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = "your key”
  c. MONGODB_URI = “your database uri”
  d. UPLOADTHING_TOKEN = “your token”
8. Run the website with the command `npm run dev` and navigate to `http://localhost:3000`.
