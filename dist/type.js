var a = '5';
console.log('aaa', a);
var b = true;
var hello = 'Hello World';
var getFullName = function (firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(getFullName('Rupam', 'Sahriar'));
var user = {
    name: "Monstar",
    age: 15,
    getMessage: function () {
        return 'hello' + this.name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return 'hello' + this.name;
    }
};
console.log(user.name);
var user3 = null;
var pageNumber = '1';
var errMessage = null;
var popularTag = ['dragon', 'coffee'];
var dragonTag = 'dragon';
