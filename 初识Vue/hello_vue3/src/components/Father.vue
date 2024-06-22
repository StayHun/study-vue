<template>
    <div class="father">
        <h3>父组件</h3>
        <div class="content">
            <Game />
            <Game />
        </div>
    </div>
</template>

<script setup lang='ts' name='Father'>
import Game from "./Game.vue";
</script>

<style lang='less' scoped>
.father {
    background-color: beige;
    padding: 20px;
    border-radius: 10px;

    .content {
        display: flex;
        justify-content: space-evenly;
    }
}
</style>