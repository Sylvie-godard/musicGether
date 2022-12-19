<script>
import HeaderHome from "@/components/HeaderHome/HeaderHome.vue";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import SliderHomePage from "@/components/SliderHomePage/SliderHomePage.vue";
import NextFriends from "@/components/NextFriends/NextFriends.vue";
import NextPrincipalsConcerts from "@/components/NextPrincipalsConcerts/NextPrincipalsConcerts.vue";

export default {
  components: { NextFriends, SliderHomePage, SearchBar, HeaderHome, NextPrincipalsConcerts },
};
</script>

<template>
  <div>
    <HeaderHome />
    <SearchBar />
    <SliderHomePage />
    <NextFriends />
    <NextPrincipalsConcerts />
  </div>
</template>

<style lang="scss"></style>
