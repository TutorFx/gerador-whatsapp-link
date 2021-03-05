module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: "Gerador de links WhatsApp - WhatsLnk",
    short_name: "WhatsLnk",
    appleMobileWebAppCapable: true,
    themeColor: "#ECE5DD",
    msTileColor: "#25D366",
    manifestOptions: {
      background_color: "#FFF"
    },
    start_url: "./index.html",
    display: "standalone",
    workboxOptions: {
      skipWaiting: true
    },
  },
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "WhatsLnk";
            return args;
        })
  }
}
