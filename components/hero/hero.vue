<template>
  <section class="hero">
    <TopNav />
    <h1>Hero Section</h1>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero {
  box-sizing: border-box;
  width: 100vw;
  height: 150px;
  background: rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
