<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "HeaderHome",
});
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>Accueil</li>
        <li>Concerts</li>
        <li>Festivals</li>
        <li>Contact</li>
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
    li {
      color: white;
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      transition: 0.3s;
    }

    li:hover {
      color: lightblue;
    }
    li:not(:last-child):after {
      content: "|";
      margin-left: 2rem;
    }
  }
}
</style>
