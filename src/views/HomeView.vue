<script>
import image from "/src/assets/images/gifPandaCours.gif";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  setup() {
    return {
      image,
    };
  },
});
</script>

<template>
  <div class="titleWebsite">Mon petit planner</div>
  <div class="container">
    <img :src="image" alt="" />
    <div class="budget">
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
</template>

<style lang="scss">
.container {
  margin: 5rem;
  padding: 2rem;
  height: 550px;
  box-shadow: 5px 5px 5px black;
  background-color: white;
  border-radius: 30px;

  .amount {
    border-radius: 10px;
    box-shadow: 5px 5px 5px black;
    padding: 1rem;
  }

  .budget {
    display: flex;
    width: 25rem;
    align-items: end;
    justify-content: space-between;
    margin-left: auto;
  }

  .containerBudget {
    display: flex;
    flex-direction: column;
    align-items: center;
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
