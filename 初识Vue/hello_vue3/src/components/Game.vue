<template>
    <div class="game">
        <h2>游戏列表</h2>
        <slot :games="games"></slot>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
    </div>
</template>

<script setup lang='ts' name='Game'>
import { reactive } from "vue";

let games = reactive([
    { id: 'uuj1', name: '英雄联盟1' },
    { id: 'uuj2', name: '英雄联盟2' },
    { id: 'uuj3', name: '英雄联盟3' },
    { id: 'uuj4', name: '英雄联盟4' },
]);
</script>

<style lang='less' scoped>
.game {
    background-color: rgb(163, 187, 208);
    border-radius: 0 0 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 200px;
    height: 300px;

    h2 {
        background-color: orange;
        text-align: center;
    }
}
</style>