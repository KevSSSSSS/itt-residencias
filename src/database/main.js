const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'residencias'
});

con.connect();

//utilizar conexion
con.query("select * from alumno", (err, res, campos) => {
    console.log(res);
})
con.end();
