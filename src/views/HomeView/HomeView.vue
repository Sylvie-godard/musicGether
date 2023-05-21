<script>
import pandaQuiCours from '/src/assets/images/gifPandaCours.gif';
import PetitOurs from '/src/assets/images/petit-ours.jpeg';
import { defineComponent, ref, onMounted } from 'vue';
import MyWishes from '@/views/HomeView/components/MyWishes.vue';

export default defineComponent({
  name: 'HomeView',
  components: { MyWishes },
  setup() {
    const isAllTasks = ref(true);

    onMounted(() => {
      initializeLocalStorage()
    })

    const initializeLocalStorage = () => {
      localStorage.setItem('MyWishes', '');
    }

    const handleTasks = () => {
      isAllTasks.value = !isAllTasks.value
    }

    const getMyWishesFromLocalStorage = () => {
      const storedValue = localStorage.getItem('MyWishes');
      if (storedValue) {
        return JSON.parse(storedValue);
      }
      return [];
    };

    return {
      handleTasks,
      getMyWishesFromLocalStorage,
      pandaQuiCours,
      PetitOurs,
      isAllTasks,
    };
  },
});
</script>

<template>
  <div class="container">
    <div class="infos">
      <div class="wishes">
        <div class="wishesList">
          <h2>Ce que je veux</h2>
          <div v-if="isAllTasks" class="allWishes">
            <ul>
              <li v-for="(wishes, key) in getMyWishesFromLocalStorage()" :key="key">{{ wishes }}</li>
            </ul>
          </div>
          <MyWishes v-else/>
          <button @click="handleTasks">Créer un nouveau souhait</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  .wishes {
    width: 100%;
  }

  .wishesList {
    padding: 1rem;
    width: 100%;
  }
}
</style>
