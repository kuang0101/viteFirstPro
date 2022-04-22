import { defineStore } from "pinia";

// Pinia 中的 getter 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能

/**
 * Actions
 * 这里与 Vuex 有极大的不同，Pinia 仅提供了一种方法来定义如何更改状态的规则，放弃 mutations 只依靠 Actions，这是一项重大的改变。
 * 
 * Pinia 让 Actions 更加的灵活：
 * 
    可以通过组件或其他 action 调用
    可以从其他 store 的 action 中调用
    直接在 store 实例上调用
    支持同步或异步
    有任意数量的参数
    可以包含有关如何更改状态的逻辑（也就是 vuex 的 mutations 的作用）
    可以 $patch 方法直接更改状态属性
 * 
 */

export const useMainStore = defineStore({
  id: "mian",
  state: () => ({
    name: "超级管理员",
  }),
  // getters
  getters: {
    nameLength: (state) => state.name.length,
  },
  // actions
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data;
    },
  },
});
