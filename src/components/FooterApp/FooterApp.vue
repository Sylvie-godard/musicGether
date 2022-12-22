<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterApp",
});
</script>
<template>
  <footer class="footerApp">
    <span>2022 @MusicGether</span>
    <span>author: Sylvie Godard</span>
  </footer>
</template>
<style lang="scss">
.footerApp {
  background-color: cadetblue;
  height: 10rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  color: white;
}
</style>
