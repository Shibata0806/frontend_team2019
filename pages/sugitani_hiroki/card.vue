<template>
  <div>
    <div class="swiper-container">
      <swiper :options="swiperOption">
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_13.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_12.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_11.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_10.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_09.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_08.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_07.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_06.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_05.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_04.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_03.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_02.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_club_01.png" />
        </div>
      </swiper>
      <button class="swiper-button-prev" type="button">前へ</button>
      <button class="swiper-button-next" type="button">次へ</button>
    </div>
    <div class="swiper-container">
      <swiper :options="swiperOption">
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_13.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_12.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_11.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_10.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_09.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_08.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_07.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_06.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_05.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_04.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_03.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_02.png" />
        </div>
        <div class="swiper-slide">
          <img src="/images/sugitani/card_spade_01.png" />
        </div>
      </swiper>
      <button class="swiper-button-prev" type="button">前へ</button>
      <button class="swiper-button-next" type="button">次へ</button>
    </div>
    <div class="links">
      <nuxt-link to="sample" class="button--green">個人ページへ</nuxt-link>
    </div>
  </div>
</template> 
   <script src="../package/js/swiper.min.js"></script>

  <!-- Initialize Swiper -->
  <script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
   <style scoped>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
