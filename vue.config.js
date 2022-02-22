module.exports = {
    devServer: {
     open:true,
     port:7000
    }
 
}
chainWebpack: config => {
  config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
}
