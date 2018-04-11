//后处理css样式，自动给css属性加上前缀eg:-moz -webit
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins:[
        autoprefixer()
    ]
}
