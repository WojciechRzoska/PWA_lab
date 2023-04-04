<template>
  <div :class="className">
    <img
      class="small-image"
      :src="item"
      v-for="(item, index) in images"
      alt="zdjecie"
      :key="index"
      @click="sendImage(item)"
    />
  </div>
</template>
<script>
export default {
  name: "Thumb",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    className: {
      type: String,
      default: () => "",
    },
  },
  created() {
    console.log(this.images);
  },
  methods: {
    sendImage(url) {
      this.$emit("selectedImg", url);
    },
  },
};
</script>
<style scoped>
.small-image:hover {
  border: 2px solid green;
}
.small-image {
  padding: 5px 5px;
  max-width: 130px;
  height: 100px;
  object-fit: cover;
}

.gallery {
  display: flex;
}
.thumbs-modal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
