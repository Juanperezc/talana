module.exports = {
  devServer: {
    proxy: 'http://sva.talana.com:8000/api',
    watchOptions: {
      poll: true
}
  },
  "transpileDependencies": [
    "vuetify"
  ]
}