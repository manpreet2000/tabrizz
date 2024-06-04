# TabRizz
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/facebookresearch/fairscale/blob/master/CONTRIBUTING.md)  

TabRizz is a SaaS application that helps you bring back lost users on your website with Emojis ✨. 
It is a no-code FREE-to-use solution for any platform including Shopify, Wix, WordPress, and many more.  
Stand out among your competitors with the help of TabRizz.

## HOW TO GET STARTED?
Let's first understand the client.
Client is built on ReactJs

```bash
cd client
npm install
npm run start
```
Go to `client/src/utils/common.ts` and update `backendUrl` to localhost of server

For the server, you need to create an account on Firebase
( There is no Firestore test simulator right now 🥲)
Get the service account key.

```bash
cd server
touch GOOGLE_APPLICATION_CREDENTIALS.json
touch .env
cat .env.example > .env
```
paste service account key content to `GOOGLE_APPLICATION_CREDENTIALS.json`

```bash
npm install
npm run dev
```

### Deployment

The Client and Server are deployed to the GCP cloud run, and the cloud build is configured to this repo's `main` branch.
The Client is deployed as soon as the `main` branch gets a new commit. 
For the server I manually deploy using the `docker` build and push to the `GCP Artifact registry` that cloud run picks up.


                                
## About Contribution :
* Raise the `issue`.
* Work on raised issues.
* Adding title animation is yet to be completed. 
* Help me improve the UI/UX.
* Help me improve the backend
* GitHub actions for server
* Adding analytics and SEO


            

