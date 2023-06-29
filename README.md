# Evaluate-News_NPL

This is the 4th and last project of the <b>Udacity Front End Nanodegree.</b>

The goal of this project is to do practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

# Description

There is a simple form with a field and a submit button.
You can insert in the field a text or an url.

The field can not remain empty when you press submit. An alert message is showed in this case.

When submit is pressed,a call to the MeaningCloud API is made.
These API let you easily do Natural Language Processing(NLPs) on your text or on the text of the provided url.
The answer from the API is processed and only few fields are returned to the client and showed to the user.

## Note 
thanks the use of ServiceWorker the offline functionality is present!

# How to run the project

### Step 1: Signup for an API key
First, you will need to go [here](https://www.meaningcloud.com/developer/apis). Signing up will get you an API key. 

### Step 2: use your API
Write your API in <i>.env</i> like this:

```API_ID=YOUR_API```

### Step 3: Run the server
On the first terminal execute

```npm run build-prod```

```npm run start```

You will get the following message:

```TextAnalyzer Server listening on port 8081!```

### Step 4: Run the client (dev-mode)
On the second terminal instead execute

```npm run build-dev```

#### Note: 
express is on port 8080, the server instead on port 8081

### Step 5: use the app
Connect to localhost:8081 
and enjoy the application!

# Dependencies

```
  "body-parser": "^1.20.2",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "express": "^4.18.2"
  "@babel/core": "^7.22.5",
  "@babel/preset-env": "^7.22.5",
  "babel-loader": "^9.1.2",
  "clean-webpack-plugin": "^4.0.0",
  "css-loader": "^6.8.1",
  "file-loader": "^6.2.0",
  "html-webpack-plugin": "^5.5.3",
  "jest": "^29.5.0",
  "node-sass": "^9.0.0",
  "sass-loader": "^13.3.2",
  "style-loader": "^3.3.3",
  "url-loader": "^4.1.1",
  "webpack": "^5.88.0",
  "webpack-cli": "^5.1.4",
  "webpack-dev-server": "^4.15.1",
  "workbox-webpack-plugin": "^7.0.0"
```
