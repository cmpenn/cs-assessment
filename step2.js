// 1. Sum Zero

function sumZero(arr){
    for (i = 0; i < arr.length; i++){
        for(k = i+1; k < arr.length; k++){
            if(arr[i]+arr[k] === 0){
            return true
            }
        }
    }
    return false
}
console.log(sumZero([1, 2, 3, -2]))
console.log(sumZero([1, 2, 3]))

// runtime O(n^2)

// 2.Unique Characters

function hasUniqueChars(str){
    let set = new Set()

    str.split('').forEach(char => set.add(char))

    if([...set].join('') === str){
        return true
    }else{
        return false
    }
}

console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))

// runtime O(1)

// 3. Pangram Sentence

function isPangram(str){
    mark = new Array(26).fill(false)
    for (let i = 0; i < str.length; i++) {
        if ('A' <= str[i] && str[i] <= 'Z'){
            index = str.charCodeAt(i) - 'A'.charCodeAt(0)
        }else if ('a' <= str[i] && str[i] <= 'z'){
            index = str.charCodeAt(i) - 'a'.charCodeAt(0)
        }else{
            continue 
        } 
 
        mark[index] = true
    }
 
    for (let i = 0; i <= 25; i++){
        if (mark[i] == false){
            return false
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))

// runtime 

// 4. Longest Word

function findLongestWord (arrStr) {
    var longest = 0, word;
  
    for(var i=0; i < arrStr.length; i++){
  
      if(longest < arrStr[i].length) {
         longest = arrStr[i].length;
         word = arrStr[i];
      }
  
    }
  
    return word;
  }

console.log(findLongestWord(["hi", "hello", "ffffffff"]))

// runtime O(n)