<script>
export default {
  name: "SliderHomePage",
  setup() {
    const errorGap = 2;

    /**
     * click on button next to be on next slide (Carousel HomePage)
     */
    const next = () => {
      const slidesContainer = document.getElementById("slider");
      const slide = document.querySelector(".slide");
      const slideWidth = slide.clientWidth + errorGap;
      slidesContainer.scrollLeft += slideWidth;
    };

    /**
     * click on button previous to be on previous slide (Carousel HomePage)
     */
    const previous = () => {
      const slidesContainer = document.getElementById("slider");
      const slide = document.querySelector(".slide");
      const slideWidth = slide.clientWidth + errorGap;
      console.log({
        clientWidth: slidesContainer.clientWidth,
        left: slide.clientWidth,
      });
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
  <div class="container">
    <div id="slider">
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
    </div>
    <div class="buttonCarousel">
      <div class="dotButtonCarousel" @click="previous">&#8249;</div>
      <div class="dotButtonCarousel" @click="next">&#8250;</div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  margin: auto;
  width: 100%;
}

.buttonCarousel {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  align-items: center;

  .dotButtonCarousel {
    cursor: pointer;
    border-radius: 50%;
    width: 50px;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
}

#slider {
  width: 100%;
  display: flex;
  height: 20rem;
  margin: auto;
  overflow: hidden;
  scroll-behavior: smooth;

  .slide {
    color: white;
    text-align: center;
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
