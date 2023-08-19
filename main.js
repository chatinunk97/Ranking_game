const itemList = [
    { id: 1, name: "Yamada", win: [], lost:[] },
    { id: 2, name: "Mahiru", win: [], lost:[] },
    { id: 3, name: "Yui", win: [], lost:[] },
    { id: 4, name: "Kitagawa", win: [], lost:[] },


]
count = 0

function rankingItem(){


itemList.forEach((obj, index) => {
    console.log("THIS START THE TEST FOR ID NUMBER ===> " + obj['id'])

    for (item of itemList) {
        testId = itemList[index]['id'] // The ID that would be tested
        rivalId = item['id'] // Its rival for each turn
        rivalObj = itemList[itemList.findIndex((rival)=>{return rival.id == rivalId})]

        if (item == itemList[index] ||checkPreviousEncounter (testId,rivalId,itemList) ) {
            continue;
        }
        if(checkPreviousWin(testId,rivalId,itemList)){
            obj.win.push(rivalId)
            rivalObj.lost.push(testId)
            continue;
        }
        if(checkPreviousLost(testId,rivalId,itemList)){
            rivalObj.win.push(testId)
            obj.lost.push(rivalId)
            continue;
        }

        result = +prompt(`#${testId}:${itemList[index]['name']} VS  #${rivalId}:${item['name']}`)
        if(isNaN(result)){
            console.log('skipped')
            continue;
        }
        console.log(itemList[index]['name'] + " VS " + item['name'] + " result ==>" + result)
        if (result == testId) {
            obj.win.push(rivalId)
            rivalObj.lost.push(testId)

        }
        else{
            rivalObj.win.push(testId)
            obj.lost.push(rivalId)
        }
        count++
    }

})
result = itemList.reduce((acc,object)=>{
    newObject = {};
    newObject['name'] = object.name;
    newObject['win'] = object.win;
    acc.push(newObject);
    return acc},[])


resultSoreted = result.sort(function(a,b){
    return b.win.length - a.win.length;
  }); 

result.forEach((item)=>{
    console.log(item.name,item.win.length)
})
return result
}

function checkPreviousEncounter (test_Id,rival_Id,arr){
    testIndex = arr.findIndex((item)=>{ return item['id'] === test_Id})
    // console.log(arr[testIndex]['win'].includes(rival_Id))
    if(arr[testIndex]['win'].includes(rival_Id)) return true;
    
    rivalIndex = arr.findIndex((item)=>{ return item['id']=== rival_Id})
    // console.log(arr[rivalIndex]['win'].includes(test_Id))
    if(arr[rivalIndex]['win'].includes(test_Id)) return true;

    return false;
}

function checkPreviousWin (test_Id,rival_Id,arr){
    testIndex = arr.findIndex((item)=>{ return item['id'] === test_Id})
    test_win_list = itemList[testIndex]['win']
    console.log(test_win_list)

    rivalIndex = arr.findIndex((item)=>{ return item['id']=== rival_Id})
    rival_lost_list = itemList[rivalIndex]['lost']
    console.log(rival_lost_list)
    for( num of rival_lost_list){
        if(test_win_list.includes(num)){
            return true
        }
    }
    return false
}

function checkPreviousLost (test_Id,rival_Id,arr){
    testIndex = arr.findIndex((item)=>{ return item['id'] === test_Id})
    test_lost_list = itemList[testIndex]['lost']


    rivalIndex = arr.findIndex((item)=>{ return item['id']=== rival_Id})
    rival_win_list = itemList[rivalIndex]['win']


    for( num of rival_win_list){
        if(test_lost_list.includes(num)){
            return true
        }
    }
    return false
}
