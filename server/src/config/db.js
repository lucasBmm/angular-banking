async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://doadmin:9QQzaLGh2mUBLggi@db-mysql-nyc3-97359-do-user-10247764-0.b.db.ondigitalocean.com:25060/defaultdb");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function queryUsers(email, password){
    
    const client = await connect();
    const [rows] = await client.query('SELECT * FROM users WHERE user_email = ?', email);
    return rows[0];
}

async function registerUser(name, email, ){

}
module.exports = { queryUsers }
