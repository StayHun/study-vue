<template>
    <div class="app">
        <h3>我是App组件</h3>
        <Suspense>
            <template v-slot:default>
                <Child />
            </template>
            <template v-slot:fallback>
                <h3>稍等，加载中...</h3>
            </template>
        </Suspense>
    </div>
</template>

<script>
import Child from "./components/Child.vue"; // 静态引入
import { Suspense } from "vue";
// import { defineAsyncComponent } from "vue";
// const Child = defineAsyncComponent(() => import("./components/Child.vue")); // 动态引入(异步引入)
export default {
    name: "App",
    components: { Child },
};
</script>

<style>
.app {
    background-color: aquamarine;
    padding: 10px;
}
</style>