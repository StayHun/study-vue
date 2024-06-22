import { createApp } from "vue";
import App from "./App.vue";
// 第一步：引入pinia
import { createPinia } from "pinia";

const app = createApp(App);
// 第二步：创建pinia实例
const pinia = createPinia();
// 第三步：将pinia实例挂载到app上
app.use(pinia);
app.mount("#app");
