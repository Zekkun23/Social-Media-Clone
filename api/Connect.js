import mysql from "mysql"

// Creating a MySQL database connection
export const db = mysql.createConnection({
    host: "localhost",     // Hostname of the database server
    user: "root",          // Username for accessing the database
    password: " ",         // Password for accessing the database
    database: "social"     // Name of the database
})
