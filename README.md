# GIT REPOS
The 'master' git repo is initialised in the root of the project. However, the server is deployed to heroku and the heroku CD git repo is initalised in /server.  Thus, there are two git repos co-existing in this project.

# WEB APP DESCRIPTION: WHAT DOES IT DO?
This web app implements a survey collection tool for the app's users.  A user can use the web app to send a survey to their target list of respondents, and collect their responses for analyses.  The app user can customise the email subject and reply-to fields to put in material that is relevant to their survey. 


# FEATURES AND TECHNOLOGIES
1. React JS on front end
2. Google Auth using Passport.jsm cookies and session tokens
3. Node Express server on heroku
4. Mongoose/MongoDB on server
5. advanced scripts for CLI and Heroku post install build process in server/package.json
6. Stripe API and npm module
7. add 5 credits per topup to user account with Stripe payments
8. server generated automatic email to users (3rd party email provider)



# RECONNECTING HEROKU GIT SERVER FOR DEPLOYMENT
* The Heroku git repo is in /server and is a separate repo from the repo in the root folder. __Heroku is configured to deploy directly from the github repo at https://github.com/zeuslawyer/surveyMe_react_fullstack_SERVER

* if the server/heroku git needs to be re-connected to heroku's git server for deployment get the project name from the folder using ```heroku list``` and then ```heroku git:remote -a <<NAME OF PROJECT>> -r heroku```

    ALTERNATIVELY

* get the git remote URL from heroku and do a ```git remote add <URL>```

* do ```git remote``` from inside /server.  It should show 'heroku'

# PROJECT KEYS/SECRETS
1. front end keys are in process.env.development and process.env.production. Both are committed (in the server's git repo)
2. server-side keys are in the config folder.  secrets.js and prod-secrets.js are safe to commit as they do not contain literal values of keys. They access the keys by importing from the environment or dev-secrets as per the logic in secrets.js
3. dev-secrets.js has the literal keys and is not committed.   