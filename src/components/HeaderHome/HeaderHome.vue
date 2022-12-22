<script>
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "HeaderHome",
  components: { RouterLink },
});
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/concerts">Concerts</RouterLink></li>
        <li><RouterLink to="/">Festivals</RouterLink></li>
        <li><RouterLink to="/">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  nav {
    background-color: cadetblue;
    box-shadow: 1px 5px 5px grey;
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    gap: 2rem;
    justify-content: center;
    list-style: none;
    padding: 2rem;

    a {
      cursor: pointer;
      transition: 0.3s;
      color: white;
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
    }
    a:hover {
      color: lightblue;
    }
    li:not(:last-child):after {
      content: "|";
      margin-left: 2rem;
    }
  }
}
</style>
