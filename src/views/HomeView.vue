<script>
import HeaderHome from "@/components/HeaderHome/HeaderHome.vue";
import SearchBar from "@/components/SearchBar/SearchBar.vue";

export default {
  components: { SearchBar, HeaderHome },
  setup() {
    const next = () => {
      const slidesContainer = document.getElementById("slider");
      const slide = document.querySelector(".slide");
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
    };

    const previous = () => {
      const slidesContainer = document.getElementById("slider");
      const slide = document.querySelector(".slide");
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    };

    return {
      next,
      previous,
    };
  },
};
</script>

<template>
  <div>
    <HeaderHome />
    <SearchBar />
    <div class="container">
      <div id="slider">
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
      </div>
      <div class="buttonCarousel">
        <button id="1" @click="previous">previous</button>
        <button id="2" @click="next">next</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  margin: auto;
  width: 80%;
}

.buttonCarousel {
  display: flex;
}

#slider {
  width: 100%;
  border: 1px solid rebeccapurple;
  display: flex;
  height: 10rem;
  margin: auto;
  overflow: hidden;
  scroll-behavior: smooth;

  .slide {
    border: 1px solid;
    color: white;
    text-align: center;
    width: 100%;
    flex: 1 0 100%;
  }
  .slide:nth-child(1) {
    background-color: pink;
    height: 100%;
    padding: 2rem;
  }

  .slide:nth-child(2) {
    background-color: #804852;
    height: 100%;
    padding: 2rem;
  }

  .slide:nth-child(3) {
    background-color: #503e41;
    height: 100%;
    padding: 2rem;
  }
}
</style>
