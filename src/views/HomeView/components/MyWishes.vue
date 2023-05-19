<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MyWishes',
  setup() {
    const allWishes = ref(['coco'])
    const wish = ref('')
    const handleInput = (event) => {
      allWishes.value.push(event.target.value)
    }

    const handleSubmit = () => {
      allWishes.value.push(wish.value)
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
