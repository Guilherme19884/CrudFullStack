import mysql from "mysql2"

export const data = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "123456",
    database: "crudreact"
})