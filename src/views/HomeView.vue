<template>
  <div>
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
    <p>C'est sylvie</p>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
header {
  nav {
    background-color: cadetblue;
    box-shadow: 1px 5px 5px grey;
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
