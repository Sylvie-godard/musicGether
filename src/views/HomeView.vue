<script>
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import SliderHomePage from "@/components/SliderHomePage/SliderHomePage.vue";
import NextFriends from "@/components/NextFriends/NextFriends.vue";
import NextPrincipalsConcerts from "@/components/NextPrincipalsConcerts/NextPrincipalsConcerts.vue";

export default {
  name: "HomeView",
  components: {
    NextFriends,
    SliderHomePage,
    SearchBar,
    NextPrincipalsConcerts,
  },
};
</script>

<template>
  <div>
    <SearchBar />
    <SliderHomePage />
    <NextFriends />
    <NextPrincipalsConcerts />
  </div>
</template>

<style lang="scss"></style>
