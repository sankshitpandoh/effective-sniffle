## Getting node_modules

Instead of running npm install in directory and then in sub directory (client)
simply, go inside project dorectory and run

```
npm install

```

This will first install dependencies in root directory and then in client directory because of post-install script in package.json which looks like this:

```
  "scripts": {
    "start": "node server.js",
    "dev": "concurrently \"npm run start\" \"cd client && npm run start\"",
    "postinstall": "cd client && npm install"
  },

```



## Now To Run both node server and react app together:

Inside project directory, simply run


```
npm run dev

```