const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=70ccc60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the','gi')
// console.log(str.match(regexp)) // (3) ['the', 'The', 'the']

const regexp = /the/gi
console.log(str.match(regexp)) // (3) ['the', 'The', 'the']