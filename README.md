# REST API with neo4j GraphDatabase and node express


Required packages
```
npm i -g yarn 
yarn add -D @babel/core @babel/node @babel/preset-env 
yarn add express nanoid bcrypt dotenv
```

.env 

```
PORT=3000

#Database

url=bolt://yourip:yourport
db_username=
db_password=
database=
```

.babelrc 

```
{
    "presets": [
        "@babel/preset-env"
    ]
}
```
