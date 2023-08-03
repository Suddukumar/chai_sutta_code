const accountId = 144553
let accountEmai = "singhsuddu7352@gmail.com"
var accountPassword='12345'
accountCity = "patna"
let accountState; //undefine

// accountId = 2 not allowed for const
accountEmai ="hc@hc.com"
accountPassword = "212121"
accountCity = "saran"

// {} - scope in javascript
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional socpe
*/
console.table([accountId,accountEmai,accountPassword,accountCity,accountState]);