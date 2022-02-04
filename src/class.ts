interface UserInterface2 {
    getFullName():string
}
// class must added method define in interface.

class User3 implements UserInterface2 {
    private firstName : string
    private lastName : string
    readonly unchangeble : string
    static maxAge = 50
    static readonly maxAge2 = 50
    // static property only accesseble with class itself.
    // not from instance 

    constructor(firstName: string, lastName : string){
        this.firstName = firstName
        this.lastName = lastName
    }

    changeUnchangebleName(): void {
     //   this.unchangeble = 'foo'
     //its error. readonly cannt modified
    }
    getFullName():string {
        return `${this.firstName} ${this.lastName}`
    }
}

const monstar = new User3('Monstar','Dhaka')
console.log(monstar.getFullName())

//private mean variable can only change via function.
//NO direct access.
//JS has no private public and protected

//here monstar have no maxAge properety access
//becasue monstar in instance

//But User3.maxAge is directy accessable.

class Admin extends User3{
    private editor: string

    setEditor(editor:string):void {
        this.editor = editor
    }
    getEditor():string {
        return this.editor
    }
}

const admin = new Admin('foo','bar')
console.log(admin.getFullName())