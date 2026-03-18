//The approach we are using is Functional Programming(FP) ~ with concepts heavily-dependent of it like {pure functions, side effects and immutability}
//At its most basic FP can be understood as a programming style in which data manipulation occurs throught the functions that return the result of the manipulation without modifying the original state of the data.
//It contrasts with programming approaches that use *shared state* in which data is manipulated and the results stored in a central location(commonly State), used famously in React.

function changeToArray(collection) {
    return Array.isArray(collection) ? collection : Object.values(collection)
}
function myEach(arrayOrObject, callback) {

        const iterable = changeToArray(arrayOrObject)
        for(let i=0; i<iterable.length; i++) {
            callback(iterable[i])
        }
        return arrayOrObject

}

function myMap(collection, callback) {
    const data = changeToArray(collection)
    let result = []
    for(let i = 0; i< data.length; i++){
        result.push(callback(data[i]))
    }
    return result
}



function myReduce(collection, callback, acc) {
    const arrData = changeToArray(collection)
    let  startIndex
    let accumulator
        if (acc === undefined) {
            accumulator = arrData[0]
            startIndex = 1
        }else{
            accumulator = acc
            startIndex = 0

        }
        for(let i = startIndex; i<arrData.length; i++) {
            accumulator = callback(accumulator, arrData[i], arrData)
        }
        return accumulator
}
function myFind(collection, predictate) {
    const data = changeToArray(collection)
    for(let i=0; i<data.length; i++) {
        if (predictate(data[i]) === true) return data[i]
    }
}

function myFilter(collection, predictate) {
    const data =  changeToArray(collection)
    let legitt = []
    for(let i = 0; i<data.length; i++){
       if (predictate(data[i]) === true) legitt.push(data[i])  
    }
    return legitt || []

}
function mySize(collection) {
    const data = changeToArray(collection)
    return data.length

}
function myFirst(arr, n) {
    if (n === undefined ){
        return arr[0]
    }    
        return arr.slice(0, n)
}


function myLast(arr, n) {
    if (n === undefined ){
        return arr[arr.length-1]
    }    
        return arr.slice(-n)
}

function myValues (obj) {
    return changeToArray(obj)
}
function myKeys(obj) {
     
    return Object.keys(obj)
}
