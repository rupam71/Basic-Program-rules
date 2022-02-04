// if we return nothing, is void
// if we return we wil get error
var doSomething = function () {
    console.log('doSomething');
};
var foo = undefined;
foo = null; //null is undefined
//if type any, all error will ignore
// Avoid this any type, not a solution at all.
var home = 'hi';
home.a();
//never type never go to end point 
//or show error
//it will stop never
var dosome = function () {
    throw 'never';
};
//Type 'unknown' is not assignable to any type.
//unknown type cannt directly assign to other type
var unknown = 10;
// let s1:string = unknown //its error
//as dataTye to assertion unknown type
var s2 = unknown;
//its ok, because unknown convert to string
var pageNumber2 = '1';
//let pageNumber3 : number = pageNumber2 as number 
// its error, because we cannt convert string to number
// we can only convert unknown to anytype
var pageNumber3 = pageNumber2;
//this is ok. Here we convert string to unknown type. 
//Then again convert unknown to number type.
