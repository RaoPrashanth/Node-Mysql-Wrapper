# Node-Mysql-Wrapper

Adapt the library by following steps :
* Install `dotenv` module and create .env file in root level of the project.
* Configure following variables :
    * <b>TTDB_MODE</b>         --> dev/prod
    * <b>TTDB_HOST_DEV</b>     --> development host database IP
    * <b>TTDB_USER_DEV</b>     --> user name of development database
    * <b>TTDB_PW_DEV</b>       --> password of development environment
    * <b>TTDB_DEV</b>          --> development database name
    * <b>TTDB_HOST_PROD</b>    --> production host database IP
    * <b>TTDB_USER_PROD</b>    --> user name of production database
    * <b>TTDB_PW_PROD</b>      --> password of production environment
    * <b>TTDB_PROD</b>         --> production database name
    * <b>TT_PORT</b>           --> port number
* Import the module using `var mothi = require('mothi')`
* Use following APIs to operate on MySQL database.
    * `insertQuery(table, row, done)` --> Insert new `row` into `table` with `done` as callback.
    * `updateQuery(table, row, where, done)` --> Update `row` using `where` clause in `table` with `done` as callback.
    * `findQuery(table, where, done)` --> Find in `table` using `where` with `done` as callback.
    * `deleteQuery(table, row, done)` --> Delete `row` from `table` with `done` as callback.
    * `fetchTableQuery(table, done)` --> Get all the rows from `table` with done as callback.
    * `customQuery(query, valueArray, done)` --> Execute customized `query` using `valueArray` with done as callback.


-----------------------------------------------------------------------------------------
To run test follow below steps :

* Install Mysql software
* Create a database with name 'test' (CLI : mysql -u {username} -p and provide {passeword} and then call "create database test")
* Create a table name 'test'.

This should be sufficient to run test suite.
