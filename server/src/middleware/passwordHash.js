function passwordHashing(password){
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            // Now we can store the password hash in db.
            return hash;
        });
    });
}
function passwordUnhashing(password, hash){
    // Load hash from the db, which was preivously stored 
    bcrypt.compare(password, hash, function(err, res) {
        if (res == true){
            return true
        } else {
            return false
        }
    });
}

module.exports = { passwordHashing, passwordUnhashing }