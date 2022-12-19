<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NextPrincipalConcert",
});
</script>
<template>
  <div class="block-concert">
    <div class="block-concert__img">
      <img src="../../assets/artists/Mura-Masa-.jpg" alt="muramasa" />
    </div>
    <div class="block-concert__info">
      <div class="block-concert__date">
        <p>NOV 25</p>
      </div>
      <div class="block-concert__wrapper-info">
        <div class="block-concert__others-infos">
          <p>Mura Masa</p>
          <p>Le Cargo CAEN</p>
        </div>
        <div>
          <p>262 Participants</p>
          <button>En savoir plus</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.block-concert {
  width: 30rem;
  border: solid 1px black;

  &__img {
    img {
      width: 100%;
    }
  }

  &__info {
    opacity: 0.5;
    display: flex;
  }

  &__date {
    width: 50px;
    height: 50px;
    border: 4px solid white;
  }

  &__wrapper-info {
    display: flex;
  }
}
</style>
