// <T> mean generic.
// mean we can provide different data type here. 
// rest will be same property.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user4 = {
    name: 'jack',
    data: {
        meta: 'foo'
    },
    meta: 'Leo'
};
var user5 = {
    name: 'rose',
    data: ['foo', 'bar', 'boo'],
    meta: true
};
var result = addId(user4);
var result2 = addId(user5);
//This is how we should call something
//Here main funtion is generic(T) and waiting for a object (extends object).
//Thats why when we call fuction in line:14, we define UserInterface Object.
console.log('result', result);
//      SAMPLE RAMDA FUNCTION 01
//      export function appand<T>(el: T, list readonly T[]) : T[]
//      --> Here is T is any type, like string
//      --> first T is element then T is array in same type
//      --> finaly return will be a array of T
//      EXAMPLE:::
//      const updatedArray = append<string>('baz', ['doo','foo'])
//Append in Ramda returns a new array of different type
//      SAMPLE RAMDA FUNCTION 02
//      export function any<T>(fn: (a:T) => boolean, list readonly T[]) : boolean
//      --> Here is T is any type, like string
//      --> first element is fuction where T is argument and function will return boolean
//      --> then T is readonly array in same type
//      --> finaly return will be boolean
//      EXAMPLE:::
//      const searchString = 'foo'
//      const hasSearchString = any<string>((el: string) => el.contains(searchString), [
//          'fooooo',
//          'bar',
//          'baz',
//       ])
