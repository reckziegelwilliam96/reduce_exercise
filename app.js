//extractValue
//Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
function extraValue(arr, key){
    return arr.reduce(function(previousValue, currentValue){
        previousValue.push(currentValue[key])
        return previousValue;
    }, []);
}

//vowelCount
//Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().trim().split('').reduce(function(accum, value){
        if (vowels.indexOf(value) > -1){
            accum[value] += 1;
        }
        return accum;
    }, {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0
    });
    return count;
}

//addKeyAndValue
//Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accum, index){
        accum[index][key] = value;
        return accum;
    }, arr)
}

//partition
//Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.


function partition(arr, callback){
    return arr.rediuce(function(accum, nextValue){
        if(callback(nextValue)){
            accum[0].push(nextValue);
        } else {
            accum[1].push(nextValue);
        }
    },[[],[]])
}