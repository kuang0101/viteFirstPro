import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import router from "./router/router";
app.use(router);

// 引入
import { createPinia } from "pinia";
// 创建根存储库并将其传递给应用程序
app.use(createPinia());

app.mount("#app");
