<template>
  <div>用户名：{{ mainStore.name }}</div>
  <div>长度：{{ mainStore.nameLength }}</div>
  <hr />
  <button @click="updateName">修改store中的name</button>
  <hr />
  <n-button>naive-ui</n-button>
</template>
<script setup lang="ts">
import { useMainStore } from "@/store/main";
import { NButton } from "naive-ui";

const mainStore = useMainStore();
// console.log(mainStore);

// Pinia 中的 getter 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能
// 组件中使用
const updateName = () => {
  mainStore.$patch({
    name: "这是修改后的name。长度要改了吗",
  });
};

// 组件中使用环境配置
// vite 提供了两种模式：具有开发服务器的开发模式（development）和生产模式（production）
console.log(import.meta.env.VITE_WEB_URL);
</script>
