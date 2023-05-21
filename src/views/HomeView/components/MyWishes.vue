<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MyWishes',
  setup() {
    const getWishesFromLocal = () => {
      return JSON.parse(localStorage.getItem('MyWishes'));
    }
    const allWishes = localStorage.getItem('MyWishes') ? ref(getWishesFromLocal()) : ref([])
    const wish = ref('')
    const handleInput = (event) => {
      allWishes.value.push(event.target.value)
    }

    const getOldWishes = () => {
      const storedValue = localStorage.getItem('MyWishes');
      if (storedValue) {
        return [...getWishesFromLocal()];
      }
      return [];
    }

    const handleSubmit = () => {
      const oldWishes = getOldWishes();
      allWishes.value.push(wish.value);
      localStorage.setItem('MyWishes', JSON.stringify([wish.value, ...oldWishes]));
    }
    return {
      allWishes,
      handleInput,
      handleSubmit,
      wish
    }
  }
});
</script>

<template>
  <div class="my-wishes">
    <input type="text" v-model="wish">
    <button @click="handleSubmit">Valider</button>
    <ul>
      <li v-for="(wishes, key) in allWishes " :key="key">{{ wishes }}</li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
