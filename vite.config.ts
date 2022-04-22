/*
 * @Author: your name
 * @Date: 2022-04-21 11:09:45
 * @LastEditTime: 2022-04-21 15:16:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vite-project\vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 添加插件  在 plugins 数组中引入
// import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins 接受包含多个插件作为单个元素的预设，该数组在内部被扁平化
  plugins: [
    vue(),
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
});
