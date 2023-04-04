<template>
  <div>
    <div class="modal" @click="closeModal"></div>
    <div class="modal-container">
      <img :src="image" class="selected-image" />

      <Thumb
        :className="'thumbs-modal'"
        :images="images"
        @selectedImg="showImg($event)"
      />
    </div>
  </div>
</template>
<script>
import Thumb from "../../gallery/Thumb.vue";
export default {
  name: "Modal",
  components: { Thumb },
  props: {
    image: {
      type: String,
      default: () => "",
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    closeModal() {
      this.$emit("cm", false);
    },
    showImg(url) {
      this.image = url;
    },
  },
};
</script>
<style scoped>
.modal {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}
.modal-container {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.selected-image {
  max-width: 600px;
  max-height: 400px;
}
</style>
