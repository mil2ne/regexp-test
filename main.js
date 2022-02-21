let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=70ccc60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

const h = `  the hello  world   !

`

console.log(
  str.match(/\w{1,}/g)
  )

console.log(
  str.match(/\d{1,}/g)
  )

console.log(
  str.match(/\bf\w{1,}\b/g)
  )

console.log(
  h.replace(/\s/g,'')
  )

