// <T> mean generic.
// mean we can provide different data type here. 
// rest will be same property.

const addId = <T extends object>(obj:T) => {
    const id = Math.random().toString(16)
    return {...obj,id}
}

interface UserInterface<T,V> {
    name:string,
    data : T,
    meta : V
}

const user4: UserInterface<{meta: string},string> = {
    name : 'jack',
    data: {
        meta:'foo'
    },
    meta: 'Leo'
}

const user5: UserInterface<string[],boolean> = {
    name : 'rose',
    data: ['foo','bar','boo'],
    meta: true

}

const result  = addId(user4)
const result2 = addId(user5)
//This is how we should call something
//Here main funtion is generic(T) and waiting for a object (extends object).
//Thats why when we call fuction in line:14, we define UserInterface Object.

console.log('result',result)

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