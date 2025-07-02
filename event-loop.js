function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b')
    console.log('bb')
}

setTimeout( () => {
    console.log('inside timeout')
}, 2000)

a();
b();

