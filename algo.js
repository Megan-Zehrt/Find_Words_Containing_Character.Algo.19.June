// 2942. Find Words Containing Character



// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.





/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    
    let array = []

    for(let index = 0; index < words.length; index++){
        let word = words[index]
        for(let i = 0; i < word.length; i++){
            if(word[i] == x){
                array.push(index)
                break;
            }
        }

    }

    return array
};