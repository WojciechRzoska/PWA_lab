<template>
  <div class="main">
    <TopNav />
    <h1 id="main-title">strona domowa</h1>
    <div class="gallery-container">
      <div class="gallery-container-big-image">
        <BigImage :image="img" @rm="runModal($event)" />
      </div>
      <div class="thumbs">
        <Thumb
          :className="'gallery'"
          :images="items"
          @selectedImg="showImg($event)"
        />
      </div>
      <Modal
        v-if="showModal"
        :image="img"
        @cm="runModal($event)"
        :images="items"
      />
    </div>
  </div>
</template>

<script>
import TopNav from "../components/nav/TopNav.vue";
import BigImage from "../gallery/bigImage.vue";
import Thumb from "../gallery/Thumb.vue";
import Modal from "../components/modal/modal.vue";

export default {
  name: "IndexPage",
  components: { TopNav, BigImage, Thumb, Modal },
  layout: "custom",
  data() {
    return {
      items: [
        "https://i.ytimg.com/vi/fb926cmtuPw/maxresdefault.jpg",
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/fb4242dfa26aa20984fdebff22626b555d73c47680b04dd0530e059084d9734d._V_SX1080_.jpg",
        "https://nano.komputronik.pl/wp-content/uploads/2023/01/shrek.jpg",
        "https://wf1.xcdn.pl/files/13/04/22/624528_shrek_the_third01_83.jpg.webp",
        "https://static.android.com.pl/uploads/2022/11/Shrek-animacja-bajka.jpg",
        "https://gfx.antyradio.pl/var/antyradio2/storage/images/filmy-i-seriale/filmy/shrek-doczeka-sie-kolejnej-odslony-antonio-banderas-potwierdzil-informacje/16722530-1-pol-PL/Shrek-doczeka-sie-kolejnej-odslony!-Antonio-Banderas-potwierdzil-informacje_article.jpg",
      ],
      img: "https://i.ytimg.com/vi/fb926cmtuPw/maxresdefault.jpg",
      showModal: false,
    };
  },
  methods: {
    showImg(url) {
      this.img = url;
    },
    runModal(e) {
      return (this.showModal = e);
    },
  },
};
</script>
<style scoped>
@import "@/assets/css/index.css";
</style>
