#WPX5 Full Stack Review Plan
#.Database
* Users table
    * id
    * name
    * email
    * auth0_id
    * photo

* .sql files
    * init.sql for schema creation
    * create user
    * find user by auth0

#Front
* Components
    * header
    * home
    * login
    * profile

* Redux Stuff
    * store
    * reducer file
        * initial state
            * user
        * reducer function
        * actions and action creators
        * Provider

* Routing
    * HashRouter or BrowserRouter
    * routes
        * /
        * /login
        * /profile
        
#Back-end
* Server folder
    * index file
    * controllers folder
        * auth controller
            * /auth/callback
            * /logout
            * /auth/user
* package.json
    *proxy


#NPM packages
* massive
* body-parser
* express
* dotenv
* react-router-dom
* axios
* express-session
* redux
* react-redux
