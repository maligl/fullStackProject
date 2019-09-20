# Full Stack Project
A node.js full stack project for managing users

## Back End
The launch page is app.js.

In api directory you can find all the possible queries.

The api port is 8080.
You can edit the port/db connection in the config.json file.

Before starting the server please initiate the database by running this command:

```
node BE\resources\create_and_populate_tables.js
```
**3rd party modules**
- sequlize - An ORM assotiat with MySql
- express - a web application framework

## Front End

The Client app is inside user-site directory.

It is built with Angular


## Roadmap
The project is not fully developed due to time constraints.

The next steps are: 

- In the BE the BL layer is missing as there is't not really needed for the current functionallity.
- CRUD - currently, there is only an api for it, on client you can just ADD user (without its privileges).
- form validations
- tests

