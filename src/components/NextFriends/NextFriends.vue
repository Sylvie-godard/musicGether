<script>
export default {
  name: "NextFriends",
};
</script>

<template>
  <div class="nextFriends">
    <h1 class="title">Accompagnez les à leur prochain concert</h1>
    <div class="allImgNextFriends">
      <img
        class="roundImg"
        src="../../assets/users/Christelle.png"
        alt="Christelle.png"
      />
      <img class="roundImg" src="../../assets/users/Célia.png" alt="Célia.png" />
      <img class="roundImg" src="../../assets/users/Mina.png" alt="Mina.png" />
      <img class="roundImg" src="../../assets/users/Kevin.png" alt="Kevin.png" />
      <img class="roundImg" src="../../assets/users/Koisso.png" alt="Koisso.png" />
      <img class="roundImg" src="../../assets/users/Izzy.png" alt="Izzy.png" />
      <img class="roundImg" src="../../assets/users/Nicolas.png" alt="Izzy.png" />
      <img class="roundImg" src="../../assets/users/Valentin.png" alt="Izzy.png" />
    </div>
  </div>
</template>

<style lang="scss">
.nextFriends {
  margin-bottom: 5rem;
  .allImgNextFriends {
    display: flex;
    gap: 2rem;
    overflow: scroll;
  }

  .roundImg {
    border-radius: 50%;
    height: 15rem;
    width: 15rem;
  }

  .title {
    padding: 1rem;
    text-align: center;
  }
}
</style>
