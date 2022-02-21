const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=70ccc60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`


console.log(
  str.match(/.{1,}(?=@)/g)
  )

console.log(
  str.match(/(?<=@).{1,}/g)
  )

console.log(
  str.match(/\bf\w{1,}\b/g)
  )
