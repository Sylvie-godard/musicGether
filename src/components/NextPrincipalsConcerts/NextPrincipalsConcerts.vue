<script>
import { defineComponent } from "vue";
import NextPrincipalConcert from "@/components/NextPrincipalConcert/NextPrincipalConcert.vue";

export default defineComponent({
  name: "NextPrincipalsConcerts",
  components: { NextPrincipalConcert },
});
</script>
<template>
  <div class="nextPrincipalsConcerts">
    <NextPrincipalConcert />
    <NextPrincipalConcert />
    <NextPrincipalConcert />
    <NextPrincipalConcert />
  </div>
</template>

<style lang="scss">
.nextPrincipalsConcerts {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: auto;
  width: 70%;
}
</style>
