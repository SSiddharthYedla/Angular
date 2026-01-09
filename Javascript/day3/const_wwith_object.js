const arr = [10, 20]; 
arr[0] = 15;
delete arr[1];
arr.push(30);
console.log(arr); 

const user = { name: 'sanjay', address: 'Bangalore' };
user['name'] = 'Venkat';
delete user.address;
user.role = 'Admin';
console.log(user);
