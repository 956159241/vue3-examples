<template>
  {{ msg }}
  <div>
    <h3>TO DO List</h3>
    <ul> <li v-for="item in list" :key="item">{{ item }}</li></ul>
    <input v-model="item" />
    <button @click="addItem">add</button>
    <button @click="deleteLast">delete last</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('Hello World');

const list = ref(['李白', '杜甫', '白居易']);
const item = ref('');

function addItem() {
  if (item.value) {
    list.value.push(item.value);
    item.value = '';
  }
}

const deleteLast = () => {
  list.value.length > 0 && list.value.pop();
};
</script>

<style scoped>
li {
  color: blueviolet;
}
</style>
