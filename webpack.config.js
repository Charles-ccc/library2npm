const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  /** 其一大众写法 */
  // externals: {
  //   lodash: 'lodash'  // 如果遇到lodash，则不会打包的library.js文件中，但在使用时需要引入
  // },
  /** 其二分别写法 */
  lodash : {
    commonjs: 'lodash',  // 表示如果通过require方式引入，变量必须定义为 lodash
    amd: 'lodash',
    root: '_' // 指向全局变量，表示都不用cmd，amd，es module方式，而是通过<script>标签引入，必须定义 _
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'root',  // 库打包。将 library 配置在全局变量，支持通过<script>标签引入。一般用 root
    /**
     * umd 配置支持cmd，amd，es module等方式；
     * this 配置不支持cmd，amd，es module等方式，会将library挂在到全局this上，通过this.library获取内容
     * global 支持在nodejs环境下，可以通过global.library获取内容
     */
    libraryTarget: 'umd'  // 库打包。
  }
}