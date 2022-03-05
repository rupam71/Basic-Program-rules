//Enum : A reserved word to creat enumerable.

const statuss = {
    notStart : 0,
    inProgress : 1,
    done: 2
}

console.log(statuss.inProgress)

enum StatusEnum {
    NotStart,   // enum value 0 because 0th element
    InProgress, // enum value 1 because 1st element
    Done        // enum value 2 because 2nd element
}

enum StatusEnum2 {
    NotStart = 'notStart',
    InProgress = 'inProgress',
    Done = 'done'
}

// Use Enum with interface
interface Task {
    id: string,
    status: StatusEnum
}

console.log(StatusEnum.InProgress)      //  1
console.log(StatusEnum2.InProgress)     //  inProgress

//We can use enum as a value and a data type

let notStartedStatus: StatusEnum = StatusEnum.NotStart
// notStartedStatus = 'foo' //is error
notStartedStatus = StatusEnum.Done
