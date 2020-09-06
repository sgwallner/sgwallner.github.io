const fs = require('fs')

const files = fs.readdirSync('sample_image')

console.log(files.map(i => `{ stimulus: "sample_image/${i}" },`).join('\n'))

