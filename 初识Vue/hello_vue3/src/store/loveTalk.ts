import axios from "axios";
import { nanoid } from "nanoid";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useLoveTalkStore = defineStore("loveTalk", () => {
  const talkList = reactive(
    JSON.parse(localStorage.getItem("talkList") || "[]")
  );
  const getTalk = async () => {
    let result = await axios.get(
      "https://api.uomg.com/api/rand.qinghua?format=json"
    );
    console.log(result);
    let obj = { id: nanoid(), content: result.data.content };
    talkList.unshift(obj);
  };
  return {
    talkList,
    getTalk,
  };
});
