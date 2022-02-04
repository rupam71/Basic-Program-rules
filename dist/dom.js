var someElement = document.querySelector('.foo');
console.log('SomeElement', someElement.value);
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log("event", target.value);
});
