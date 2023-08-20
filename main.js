const itemList = [
    { id: 1, name: "Iori", win: [], lost: [], picUrl: "./idolish7/1.Iori.jpg" },
    { id: 2, name: "Yamato", win: [], lost: [], picUrl: "./idolish7/2.Yamasan.jpg" },
    { id: 3, name: "Mitsuki", win: [], lost: [], picUrl: "./idolish7/3.Mizuki.jpg" },
    { id: 4, name: "Tamaki", win: [], lost: [], picUrl: "./idolish7/4.Tamaki.jpg" },
    { id: 5, name: "Sogo", win: [], lost: [], picUrl: "./idolish7/5.Souchan.jpg" },
    { id: 6, name: "Nagi", win: [], lost: [], picUrl: "./idolish7/6.Nagi.jpg" },
    { id: 7, name: "Riku", win: [], lost: [], picUrl: "./idolish7/7.Rikku.jpg" },
    { id: 8, name: "Gaku", win: [], lost: [], picUrl: "./idolish7/8.Gaku.jpg" },
    { id: 9, name: "TenTen", win: [], lost: [], picUrl: "./idolish7/9.TenTen.jpg" },
    { id: 10, name: "Ryuu", win: [], lost: [], picUrl: "./idolish7/10.Ryu.jpg" },
    { id: 11, name: "Momo", win: [], lost: [], picUrl: "./idolish7/11.Momo.jpg" },
    { id: 12, name: "Yuki", win: [], lost: [], picUrl: "./idolish7/12.Yauki.jpg" },
]
let leftButton = document.querySelector(".left")
let rightButton = document.querySelector(".right")
let drawButton = document.querySelector('.myButton')
let endButton = document.querySelector('.endButton')


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
        leftButton.style.pointerEvents = 'none'
        rightButton.style.pointerEvents = 'none'
        drawButton.style.pointerEvents = 'none'
        endGameResult(itemList)
        return
    }
    // add num to go to the next match
    previousEnCheck = ""
    do {

        if (num == initialMatch.length) {
            console.log("!!!!!!!!!!!!")
            leftButton.style.pointerEvents = 'none'
            rightButton.style.pointerEvents = 'none'
            drawButton.style.pointerEvents = 'none'
            endGameResult(itemList)
            return
        }
        autoSkipCheck = (previousEncounter(num, itemList) || previousWin(num, itemList) || previousLost(num, itemList))

    } while (autoSkipCheck)


    renderMatch(num, initialMatch)


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
        leftButton.style.pointerEvents = 'none'
        rightButton.style.pointerEvents = 'none'
        drawButton.style.pointerEvents = 'none'
        endGameResult(itemList)
        return
    }
    // add num to go to the next match
    previousEnCheck = ""
    do {
        if (num == initialMatch.length) {
            console.log("!!!!!!!!!!!!")
            leftButton.style.pointerEvents = 'none'
            rightButton.style.pointerEvents = 'none'
            drawButton.style.pointerEvents = 'none'
            endGameResult(itemList)
            return
        }
        autoSkipCheck = (previousEncounter(num, itemList) || previousWin(num, itemList) || previousLost(num, itemList))

    } while (autoSkipCheck)


    renderMatch(num, initialMatch)
})
drawButton.addEventListener("click", () => {

    theMatch = initialMatch[num]

    //update the score
    console.log("Score DRAW!")

    //After adding points to the previous Match
    num++

    if (num == initialMatch.length) {
        console.log("!!!!!!!!!!!!")
        leftButton.style.pointerEvents = 'none'
        rightButton.style.pointerEvents = 'none'
        drawButton.style.pointerEvents = 'none'
        endGameResult(itemList)
        return
    }
    // add num to go to the next match
    previousEnCheck = ""
    do {
        if (num == initialMatch.length) {
            console.log("!!!!!!!!!!!!")
            leftButton.style.pointerEvents = 'none'
            rightButton.style.pointerEvents = 'none'
            drawButton.style.pointerEvents = 'none'
            endGameResult(itemList)
            return
        }
        autoSkipCheck = (previousEncounter(num, itemList) || previousWin(num, itemList) || previousLost(num, itemList))

    } while (autoSkipCheck)

    renderMatch(num, initialMatch)
})
endButton.addEventListener('click', () => {
    endGameResult(itemList)
    // location.reload()
})


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

function renderMatch(num, matchList) {
    renderTargetMatch = matchList[num]

    console.log("##### ##### ##### ##### NEW MATCH REDERED ##### ##### ##### #####  NUM IS " + num)
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

function previousEncounter(matchIndex, arr) {

    subMatch = initialMatch[matchIndex]

    testObj = arr.find((item) => { return item['id'] == subMatch['testId'] })


    rivalObj = arr.find((item) => { return item['id'] == subMatch['rivalId'] })


    if (testObj['win'].includes(subMatch['rivalId']) || testObj['lost'].includes(subMatch['rivalId'])) {
        num++;
        console.log("!!!!!!!!!!!! SKIPPED BY ENCOUNTER !!!!!!!!!!!!!!!!!!!!!!!!!!!!")

        return true
    }
    return false
}

function previousWin(matchIndex, arr) {
    subMatch = initialMatch[matchIndex]

    testObj = arr.find((item) => { return item['id'] == subMatch['testId'] })
    rivalObj = arr.find((item) => { return item['id'] == subMatch['rivalId'] })


    for (item of testObj['win']) {
        if (rivalObj['lost'].includes(item)) {
            testObj['win'].push(rivalObj['id'])
            rivalObj['lost'].push(testObj['id'])
            console.log("********************** SKIPPED BY Previous WIN ***********************")

            num++;
            return true
        }
    }

    return false

}
function previousLost(matchIndex, arr) {
    subMatch = initialMatch[matchIndex]

    testObj = arr.find((item) => { return item['id'] == subMatch['testId'] })
    rivalObj = arr.find((item) => { return item['id'] == subMatch['rivalId'] })


    for (item of rivalObj['win']) {
        if (testObj['lost'].includes(item)) {
            rivalObj['win'].push(testObj['id'])
            testObj['lost'].push(rivalObj['id'])
            console.log("------------------------------SKIPPED BY Previous LOST ------------------------------")
            num++;
            return true
        }
    }

    return false

}

function endGameResult(arr) {
    result = arr.reduce((acc, object) => {
        newObject = {};
        newObject['name'] = object.name;
        newObject['win'] = object.win;
        acc.push(newObject);
        return acc
    }, [])
    resultSoreted = result.sort(function (a, b) {
        return b.win.length - a.win.length;
    });

    displayResult = resultSoreted.reduce((acc, item) => {
        acc += (item.name + " " + item.win.length);
        acc += ("\n")
        return acc
    }, "")
    alert(displayResult)
    
    divBox = document.querySelector('.box').innerHTML = `     
    <div  style="font-size: 2rem;">
    1. ${resultSoreted[0].name} WIN Count : ${resultSoreted[0].win.length} <br>
    2. ${resultSoreted[1].name} WIN Cunt : ${resultSoreted[1].win.length} <br>
    3. ${resultSoreted[2].name} WIN Count : ${resultSoreted[2].win.length} <br>
    </div>   
    <div class="buttonHolder">
        <button class="myButton resetButton" style="font-size: 1rem; color: rgb(252, 156, 156);">
                Play Again
        </button>
    </div>
    </div>`

    let resetButton = document.querySelector('.resetButton')
    resetButton.addEventListener('click',()=>{
        location.reload()
    })
    return resultSoreted
}

initialMatch = genIntialMatch(itemList)
renderMatch(0, initialMatch)



// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
// randomIndex = [];
// for(let i = 1 ; i<= initialMatchOrdered.length ; i++){
//     do{
//         num = getRandomInt(initialMatchOrdered.length)
//     }while(randomIndex.includes(num))
//     randomIndex.push(num)
// }

// initialMatch = [];
// for(index of randomIndex){
//     initialMatch.push(initialMatchOrdered[index])
// }

//



// for(item of itemList){
//     console.log(item.name,item.win,item.lost)
// }


//////////// This set of codes is for random displaying matches not that usefulnow //////////////


/////////////////////////////////////////////////////////////////////////////////////////////////