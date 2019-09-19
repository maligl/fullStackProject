
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Mali",
  password: "mM123456"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  con.query("DROP DATABASE ttmc", function (err, result) {
    if (err) 
       console.log("ttmc not Database dropped. Probably didnt exist. Will attempt to continue");
    console.log("ttmc Database dropped");
    console.log("Will create ttmc database");
    con.query("CREATE DATABASE ttmc", function (err, result) {
        if (err) throw err;
        console.log("ttmc database created");
        con.query("USE ttmc", function (err, result) {
            if (err) 
                throw err;    
               
            console.log("Will create privileges table");
            var sql = "CREATE TABLE privileges (id INT AUTO_INCREMENT PRIMARY KEY, privilege VARCHAR(255))";
            con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("privileges table created");
                    sql = "INSERT INTO privileges (privilege) VALUES ?";
                    var values = [
                        ['ViewData'],
                        ['ViewUsers'],
                        ['ManageUsers'],
                        ['ViewRoles'],
                        ['ManageRoles'],
                        ['ConfigureSystem'],
                        ['ViewConfigureSystem']    
                    ];
                    con.query(sql, [values], function (err, result) {
                        if (err) throw err;
                        console.log("Privileges table populated. Number of records inserted: " + result.affectedRows);
                                                      
                    });            
                    sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), description VARCHAR(255))";
                    con.query(sql, function (err, result) {
                        if (err) throw err;
                        console.log("users table created");																	
						sql = "INSERT INTO users (name, description) VALUES ?";
						var values = [
                        ['Admin', 'SysAdmin'],
                        ['Viewer1', 'Read only'],
                        ['Viewer2', 'Read only'],
                        ['Viewer3', ''],
                        ['RolesHandler', 'Limited to roles'],
                        ['DataObserver', ''],
                        ['SuperUser', '']
						];
						con.query(sql, [values], function (err, result) {
							if (err) throw err;
							console.log("Users table populated. Number of records inserted: " + result.affectedRows);                                                     
                        });
                        console.log("Will create users_privelege table");
                        sql = "CREATE TABLE users_privelege(UserId INT NOT NULL, PrivilegeId INT NOT NULL, \
                            FOREIGN KEY (UserId) REFERENCES users(id), \
                            FOREIGN KEY (PrivilegeId) REFERENCES PRIVILEGES(id)) "
                        con.query(sql, function (err, result) {
                            if (err) throw err;
                            console.log("users_privelege table created");																	
                            sql = "INSERT INTO users_privelege (UserId, PrivilegeId) VALUES ?"
                            var values = [
                                [1,7],
                                [2,2], [2,4], [2,1],
                                [3,2], [3,4], [3,1],
                                [4,2], [4,4], [4,1],
                                [5,4], [5,5],
                                [6,1],
                                [7,2], [7,3]
                            ];
                            con.query(sql, [values], function (err, result) {
                                if (err) throw err;
                                console.log("users_privelege table populated. Number of records inserted: " + result.affectedRows);                                                     
                            });
                        })				
                    });
                });                
            });
        });
  });
 
  
});