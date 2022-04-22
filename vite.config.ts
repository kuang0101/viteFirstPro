import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";

import path from "path";

// 添加插件  在 plugins 数组中引入
// import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // 打包路径
  // plugins 接受包含多个插件作为单个元素的预设，该数组在内部被扁平化
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // }),
    // 为了与某些 Rollup 插件兼容，可能需要强制执行插件的顺序，或者只在构建时使用。这应该是 Vite 插件的实现细节。
    // 可以使用 enforce 修饰符来强制插件的位置:
    // pre：在 Vite 核心插件之前调用该插件
    // 默认：在 Vite 核心插件之后调用该插件
    // post：在 Vite 构建插件之后调用该插件
    // {
    //   ...vue(),
    //   enforce: 'pre',
    //   /**
    //    * 按需应用
    //    * 默认情况下插件在开发 (serve) 和生产 (build) 模式中都会调用。
    //    * 如果插件在服务或构建期间按需使用，
    //    * 请使用 apply 属性指明它们仅在 'build' 或 'serve' 模式时调用：
    //    */
    //   // apply: 'build'
    // }
  ],
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // 全局 css 样式文件全局注入到项目
  css: {
    //css预处理
    preprocessorOptions: {
      /*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
        注: 只有在main.js引入一个其他scss文件或者在.vue文件中使用<style lang="scss"><style>，并且里面有内容，
            则 scss.additionalData 配置的全局scss文件就可以正确引入了
			*/
      scss: {
        additionalData: "@import '@/assets/style/main.scss';",
      },
    },
  },
  // 启动服务配置
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
  // 生产环境打包配置； 去除 console、 debugger
  build: {
    terserOptions: {
      compress: {
        // drop_console: true,
        // drop_debugger: true,
      },
    },
  },
});
