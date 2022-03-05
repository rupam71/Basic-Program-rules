var a = '5'
console.log('aaa',a)

const b = true

let hello:string = 'Hello World' 

const getFullName = (firstName: string, lastName: string) : string =>{
    return firstName +' '+lastName
}
console.log(getFullName('Rupam','Sahriar'))

//INTERFACE
interface User {
    name:string
    age?: number // ?, not mandetory
    getMessage():string
}

const user: User = {
    name : "Monstar",
    age: 15,
    getMessage(){
        return 'hello' + this.name
    } 
}

const user2: User = {
    name : "Jack",
    getMessage(){
        return 'hello' + this.name
    }
}

console.log(user.name)

let user3: User | null = null

let pageNumber: string | number = '1'
let errMessage: string | null = null

type ID = string
type PopularTag = string
type MaybePopularTag = PopularTag | null

const popularTag:PopularTag[] = ['dragon','coffee']
const dragonTag: MaybePopularTag = 'dragon'