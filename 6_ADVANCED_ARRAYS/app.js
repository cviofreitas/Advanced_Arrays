function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (value) {
    let doubledVal = value * 2;
    newArr.push(doubledVal);
  });
  return newArr;
}

function onlyEvensValues(arr) {
  let newArr = [];
  arr.forEach(function (value) {
    if (value % 2 === 0) {
      newArr.push(value);
    }
  });
  return newArr;
}

function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function (value) {
    const lastLetter = value[value.length - 1];
    const firstLetter = value[0];
    newArr.push(`${firstLetter}${lastLetter}`);
  });
  return newArr;
}

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}

function vowelCount(str) {
  let strArr = Array.from(str.toLowerCase());
  let vowels = ["a", "e", "i", "o", "u"];
  let obj = {};
  strArr.forEach(function (val) {
    if (vowels.includes(val)) {
      if (!obj[val]) {
        obj[val] = 1;
      } else {
        obj[val] += 1;
      }
    }
  });
  return obj;
}

function doubleValuesWithMap(arrOfNums) {
  const newArr = arrOfNums.map(function (num) {
    return num * 2;
  });
  return newArr;
}

function valTimesIndex(arr) {
  return arr.map(function (num, index) {
    return num * index;
  });
}

const extractKey = function (arrObj, key) {
  return arrObj.map(function (val) {
    return val[key];
  });
};

const extractFullName = function (arr) {
  return arr.map(function (val) {
    return (names = `${val["first"]} ${val["last"]}`);
  });
};

function filterByValue(arr, key) {
  return arr.filter(function (item) {
    if (item[key] === true) {
      let name = item.first;
      return item;
    }
  });
}

function find(arr, item) {
  let foundValue = arr.filter(function (e) {
    if (item === e) {
      return item;
    }
  });
  return foundValue;
}

const findInObj = function (arr, key, boolean){
    let name = arr.filter(function(names){
      return names[key] === boolean;
      }
    ); return name[0];
  }

  function removeVowels(str){
    const strArr = Array.from(str.toLowerCase())
    const vowels = ['a','e','i','o','u'];
    return strArr.filter(function(letter){
      if (!vowels.includes(letter)){
        return letter
      }
    })
  }

  const doubleOddNumbers = function(arr){
    return arr.filter(function(num){
      return num % 2 !== 0;
      }).map(function(num){
      return num * 2
    })
  }