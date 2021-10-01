//Write a function to check a sentence to see if it's a pangram or not.

function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "false";
     }
    }
   
   return "true";
 }

pangrams('Hello there')
pangrams("The quick brown fox jumps over the lazy dog!")

//I think the time complexity of this function is O(n)