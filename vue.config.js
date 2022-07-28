const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: '@import "@assets/main.scss"'
  //     }
  //   }
  // },
  // vuePaths: {
  //   sourceDir: 'src',
  //   publicDir: 'public'
  // },

  pluginOptions: {
    i18n: {
      locale: "uz",
      fallbackLocale: "uz",
      localeDir: "locales",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
});
