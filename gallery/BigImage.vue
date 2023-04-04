<template>
  <img class="big-image" :src="image" alt="zdjecie" @click="showModal" />
</template>
<script>
export default {
  name: "BigImage",
  props: {
    image: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    showModal() {
      this.$emit("rm", true);
    },
  },
  data() {
    return {};
  },
  created() {},
};
</script>
<style scoped>
.big-image {
  width: 100%;
  height: 250px;
  cursor: pointer;
}
</style>
