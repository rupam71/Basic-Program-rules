const someElement = document.querySelector('.foo') as HTMLInputElement

console.log('SomeElement', someElement.value)

someElement.addEventListener('blur', (event)=>{
    const target = event.target as HTMLInputElement
    console.log("event",target.value)
})

