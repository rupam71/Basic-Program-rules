// if we return nothing, is void
// if we return we wil get error

const doSomething = ():void =>{
    console.log('doSomething')
}

let foo:void = undefined
foo = null //null is undefined

//if type any, all error will ignore
// Avoid this any type, not a solution at all.
let home : any = 'hi'
home.a()

//never type never go to end point 
//or show error
//it will stop never
const dosome = ():never =>{
    throw 'never'
}

//Type 'unknown' is not assignable to any type.
//unknown type cannt directly assign to other type
let unknown : unknown = 10;
// let s1:string = unknown //its error

//as dataTye to assertion unknown type
let s2:string = unknown as string 
//its ok, because unknown convert to string
let pageNumber2 : string = '1'

//let pageNumber3 : number = pageNumber2 as number 
// its error, because we cannt convert string to number
// we can only convert unknown to anytype

let pageNumber3 : number = (pageNumber2 as unknown) as number
//this is ok. Here we convert string to unknown type. 
//Then again convert unknown to number type.
