let leftBox = document.querySelector('.left')

leftBox.addEventListener('click',()=>{
    console.log("LEFT")
    leftBox.style.pointerEvents = "none" 
    rightBox.style.pointerEvents = "none" 
    setTimeout(() => {
        leftBox.style.pointerEvents = "" 
        rightBox.style.pointerEvents = "" 
    }, 2000);
})
let rightBox = document.querySelector('.right')

rightBox.addEventListener('click',()=>{
    console.log("RIGHT")
    leftBox.style.pointerEvents = "none" 
    rightBox.style.pointerEvents = "none" 
    setTimeout(() => {
        rightBox.style.pointerEvents = "" 
        leftBox.style.pointerEvents = "" 
    }, 2000);
})