let password = 'Sanjay@2025';

let encryptedPassword = btoa(password);
console.log('encryptedPassword', encryptedPassword);

let decryptedPassword = atob(encryptedPassword);
console.log('decryptedPassword', decryptedPassword)

// Note : window/global object methods can be directly accessed 