import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  // actions里面放置的是一个一个的方法，用于响应组件中的动作
  actions: {
    increment(value: number) {
      this.sum += value;
      console.log(this);
    },
  },
  // 真正存储数据的地方
  state: () => {
    return {
      sum: 0,
    };
  },
  getters: {
    bigSum: (state) => {
      return state.sum * 10;
    },
  },
});
