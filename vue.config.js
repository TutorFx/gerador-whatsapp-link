module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: "Gerador de links WhatsApp - WhatsLnk",
    short_name: "ITH Pós Graduação",
    appleMobileWebAppCapable: true,
    themeColor: "#191A35",
    msTileColor: "#191A35",
    manifestOptions: {
      background_color: "#FFF"
    },
    start_url: "./index.html",
    display: "standalone",
  },
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "My Vue App";
            return args;
        })
  }
}
