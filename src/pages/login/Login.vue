<template>
  <div>用户名：{{ mainStore.name }}</div>
  <div>长度：{{ mainStore.nameLength }}</div>
  <hr />
  <button @click="updateName">修改store中的name</button>
</template>
<script setup lang="ts">
import { useMainStore } from "@/store/main";

const mainStore = useMainStore();
// console.log(mainStore);

// Pinia 中的 getter 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能
// 组件中使用
const updateName = () => {
  mainStore.$patch({
    name: "这是修改后的name。长度要改了吗",
  });
};
</script>
