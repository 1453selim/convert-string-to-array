//Transform a string into an array and fix it!


/* "Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";

const me = 'Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand. – Martin Fowler. Agile Software Design'

 me.split(' '); 

console.log(me.split(' '));
const favoriteQuote = ["Some", "body", "can", "write", "code", "that", "a", "very", "well", "designed", "code", "machines", "can", "understand.", "Good", "programmers", "write", "code", "that", "humans", "can", "understand.", "–", "Martin", "Fowler.", "Agile", "Software", "Design"] 
favoriteQuote.pop("Design");
console.log(favoriteQuote.pop("Design"));
favoriteQuote.push('Development','ThoughtWorks' ,'Inc');
console.log(favoriteQuote);
favoriteQuote[1] = 'fool'
console.log(favoriteQuote);
favoriteQuote.shift('some');
console.log(favoriteQuote);
favoriteQuote.unshift('any');
console.log(favoriteQuote);
favoriteQuote.splice(7,5,'computer')
console.log(favoriteQuote);
favoriteQuote.join(' ')
console.log(favoriteQuote.join(' ')) */

let favoriteQuote ="“Some body can write code that a very well designed code machines can understand. Good programmers write code that first humans can understand.” – Martin Fowler. Agile Software Design."
let quote = favoriteQuote.split(" ")
console.log(quote)
console.log(quote.length);
quote.pop();//to remove last item 
console.log(quote);
console.log(quote.length);
quote.push("Development,","ThoughtWorks" ,"Inc")
console.log(quote);
const indexOf =quote.indexOf("body");
console.log(indexOf);
quote[1] ="fool"
console.log(quote);
quote.shift()
console.log(quote);
quote.unshift("Any");
console.log(quote)
quote.splice(7,5,"computer")
console.log(quote)
const array =quote.join(" ")
console.log(array)


