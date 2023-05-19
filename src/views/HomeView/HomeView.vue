<script>
import pandaQuiCours from '/src/assets/images/gifPandaCours.gif';
import PetitOurs from '/src/assets/images/petit-ours.jpeg';
import { defineComponent, ref } from 'vue';
import MyWishes from '@/views/HomeView/components/MyWishes.vue';

export default defineComponent({
  name: 'HomeView',
  components: { MyWishes },
  setup() {
    const isAllTasks = ref(true);

    const handleTasks = () => {
      isAllTasks.value = !isAllTasks.value
    }

    return {
      handleTasks,
      pandaQuiCours,
      PetitOurs,
      isAllTasks,
    };
  },
});
</script>

<template>
  <div class="titleWebsite">Mon petit planner</div>
  <div class="container">
    <div class="budget">
      <img :src="pandaQuiCours" alt="" />
      <div class="allAmounts">
        <div class="containerBudget">
          <p>Pour moi</p>
          <div class="amount">255€</div>
        </div>
        <div class="containerBudget">
          <p>De côté</p>
          <div class="amount">3000€</div>
        </div>
      </div>
    </div>
    <div class="infos">
      <div class="wishes">
        <div class="wishesList">
          <h2>Ce que je veux</h2>
          <div v-if="isAllTasks" class="allWishes">
            <ul>
              <li>1 voiture</li>
              <li>1 écran</li>
              <li>1 bureau</li>
            </ul>
          </div>
          <MyWishes v-else/>
          <button @click="handleTasks">Créer un nouveau souhait</button>
        </div>
      </div>
      <div class="thisWeek">
        <h4>Cette semaine</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  margin: 1rem;
  padding: 2rem;
  box-shadow: 5px 5px 5px black;
  background-color: white;
  border-radius: 30px;

  .allAmounts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 20rem;
  }

  .amount {
    border-radius: 10px;
    box-shadow: 5px 5px 5px black;
    flex-wrap: wrap;
    padding: 1rem;
  }

  .budget {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
  }

  .containerBudget {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .infos {
    display: flex;
    justify-content: space-between;
  }

  .thisWeek {
  }
  .wishesList {
    border: thick double black;
    min-height: 256px;
    padding: 1rem;
    width: 256px;
  }
}

.titleWebsite {
  background-color: white;
  box-shadow: 10px 5px 5px black;
  border-radius: 10px;
  padding: 1rem;
  margin: auto;
  margin-top: 2rem;
  width: 30%;
}
</style>
