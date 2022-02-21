let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=70ccc60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`

// const regexp = new RegExp('the','gi')
// console.log(str.match(regexp)) // (3) ['the', 'The', 'the']

console.log(
  str.match(/h..p/g)
  )

console.log(
  str.match(/fox|dog/g)
  )

console.log(
  str.match(/https?/g)
  )

console.log(
  str.match(/\b\w{2,3}\b/g)
  )

