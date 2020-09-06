const fs = require('fs')

const files = fs.readdirSync('sample_image').filter(i => i.toLowerCase() !== '.ds_store')

console.log(files.map(i => `{ stimulus: "sample_image/${i}" },`).join('\n'))

