<template>
    <div class="child">
        <h3>我是Child组件(子)</h3>
        <!-- <Son /> -->
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "Child",
    // components: { Son },
    setup() {
        let sum = ref(0);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ sum });
            }, 3000);
        });
    },
};
</script>

<style>
.child {
    background-color: rgb(70, 61, 197);
    padding: 10px;
}
</style>