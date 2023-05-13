import { defineStore } from "pinia";

export const useGallery = defineStore("gallery", {
  state: () => ({ bigImageSrc: null }),

  getters: {
    getBigImageSrc: (state) => state.bigImageSrc,
    canShow: (state) => state.bigImageSrc && state.bigImageSrc.length > 1,
  },

  actions: {
    setBigImageSrc(src) {
      this.bigImageSrc = src;
    },
    removeBigImageSrc() {
      this.bigImageSrc = null;
    },
  },
});
