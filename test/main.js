const itemList = [
    { id: 1, name: "Yamada", win: [], lost: [], picUrl: "../picsource/ymd.jpg" },
    { id: 2, name: "Mahiru", win: [], lost: [], picUrl: "../picsource/mahiru.jpg" },
    { id: 3, name: "Yui", win: [], lost: [], picUrl: "../picsource/yui.jpg" },
    { id: 4, name: "Kitagawa", win: [], lost: [], picUrl: "../picsource/kitagawa.jpg" },
]
let leftButton = document.querySelector(".left")
let rightButton = document.querySelector(".right")

num = 0

leftButton.addEventListener("click", () => {
    theMatch = initialMatch[num]

    //update the score
    console.log("Score Checked!")
    addPoint(itemList, theMatch, 'left')

    //After adding points to the previous Match
    num++

    if (num == initialMatch.length) {
        console.log("!!!!!!!!!!!!")
        leftButton.style.pointerEvents='none' 
        rightButton.style.pointerEvents = 'none'
        return
    }
    // add num to go to the next match
    renderMatch(num)


})
rightButton.addEventListener("click", () => {

    theMatch = initialMatch[num]

    //update the score
    console.log("Score Checked!")
    addPoint(itemList, theMatch, 'right')

    //After adding points to the previous Match
    num++

    if (num == initialMatch.length) {
        console.log("!!!!!!!!!!!!")
        leftButton.style.pointerEvents='none' 
        rightButton.style.pointerEvents = 'none'
        return
    }
    // add num to go to the next match
    renderMatch(num)

})



function renderMatch(num) {
    renderTargetMatch = initialMatch[num]
    console.log("##### ##### ##### ##### NEW MATCH REDERED ##### ##### ##### ##### ")
    console.log(`Left ${renderTargetMatch['testId']} vs Right ${renderTargetMatch['rivalId']}`)

    testObj = itemList.find((item) => { return item['id'] == renderTargetMatch['testId'] })
    leftNameV = (testObj['name'])
    leftImgV = (testObj['picUrl'])

    rivalObj = itemList.find((item) => { return item['id'] == renderTargetMatch['rivalId'] })
    rightNameV = (rivalObj['name'])
    rightImgV = (rivalObj['picUrl'])


    letftName = document.querySelector('.nameLeft').innerHTML = `<h2>${leftNameV}</h2>`
    leftImg = document.querySelector('.imgLeft').style.backgroundImage = `url(${leftImgV})`

    rightName = document.querySelector('.nameRight').innerHTML = `<h2>${rightNameV}</h2>`
    rightImg = document.querySelector('.imgRight').style.backgroundImage = `url(${rightImgV})`



}

function genIntialMatch(arr) {
    genMatch = arr.reduce((acc, object) => {
        arr.forEach((objectSub) => {
            newObj = {}
            newObj.testId = object.id
            newObj.rivalId = objectSub.id
            if (newObj.testId != newObj.rivalId) {
                acc.push(newObj)
            }

        })
        return acc
    }, [])
    return genMatch
}



function addPoint(arr, obj, leftOrRight) {
    testId = obj['testId']
    testfoundIndex = arr.findIndex((item) => { return item['id'] == testId })
    testObj = arr[testfoundIndex]

    rivalId = obj['rivalId']
    rivalfoundIndex = arr.findIndex((item) => { return item['id'] == rivalId })
    rivalObj = arr[rivalfoundIndex]

    if (leftOrRight == 'left') {
        // console.log(arr[testfoundIndex]['name'] + " Wins")
        testObj.win.push(rivalId)
        rivalObj.lost.push(testId)
        // console.log(testObj['win'])
        return;
    }

    // console.log(arr[rivalfoundIndex]['name'] + " Wins")
    rivalObj.win.push(testId)
    testObj.lost.push(rivalId)
    // console.log(rivalObj['win'])
    return;
}
// function checkPreviousEncounter(tester, rival_Id) {
//     if (testObj[0]['win'].includes(rivalId) || testObj[0]['lost'].includes(rivalId)) {
//         return true
//     }
//     return false
// }




initialMatch = genIntialMatch(itemList)
renderMatch(0)

//If testObj win already has the rivalObj => auto witn for the tester



// testId = initialMatch[1].testId
// rivalId = initialMatch[2].rivalId
// testObj = itemList.filter((item)=>{return item.id== testId})
// rivalObj = itemList.filter((item)=>{return item.id== rivalId})

// testImg = testObj[0].picUrl
// rivalImg = rivalObj[0].picUrl
// testName = testObj[0].name
// rivalName = rivalObj[0].name
// letftName = document.querySelector('.nameLeft').innerHTML = `<h2>${testName}</h2>`
// leftImg = document.querySelector('.imgLeft').innerHTML=`<img  src=${testImg} alt="">`


// rightImg = document.querySelector('.imgRight').innerHTML=`<img  src=${rivalImg} alt="">`
// rightName = document.querySelector('.nameRight').innerHTML = `<h2>${rivalName}</h2>`

// for( item of itemList){
//     console.log(`${item.id} WIN ${item.win} LOST ${item.lost}`)
// }
//////////// This set of codes is for random displaying matches not that usefulnow //////////////
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
// randomIndex = [];
// for(let i = 1 ; i <=genMatch.length ; i++){
//     do{
//         num = getRandomInt(16)
//     }while(randomIndex.includes(num))
//     randomIndex.push(num)
// }

// for(let i = 1 ; i <= genMatch.length ; i++){
//     console.log(genMatch[randomIndex[i]])
// }
/////////////////////////////////////////////////////////////////////////////////////////////////