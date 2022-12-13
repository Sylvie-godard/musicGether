<script>
import HeaderHome from "@/components/HeaderHome/HeaderHome.vue";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import SliderHomePage from "@/components/SliderHomePage/SliderHomePage.vue";

export default {
  components: { SliderHomePage, SearchBar, HeaderHome },
};
</script>

<template>
  <div>
    <HeaderHome />
    <SearchBar />
    <SliderHomePage />
  </div>
</template>

<style lang="scss"></style>
