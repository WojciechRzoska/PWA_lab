<template>
  <div class="nav">
    <div class="logo">
      <img
        class="img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/2560px-Nuxt_logo_%282021%29.svg.png"
      />
    </div>
    <div class="links">
      <NuxtLink class="link" to="/">Main</NuxtLink>
      <NuxtLink class="link" to="/about">About</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavPage",
};
</script>
<style>
.nav {
  background-color: rgb(129, 129, 129);
  width: 100vw;
  display: flex;
  align-items: center;
  gap: 20px;
}
@media (max-width: 30em) {
  .nav {
    flex-direction: column;
  }
  .links {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.logo {
  height: 100%;
  max-width: 200px;
}
.logo img {
  height: 100%;
  width: 100%;
}
.links {
  display: flex;
  gap: 10px;
}
.links a {
  padding: 10px 0;
  text-decoration: none;
  color: white;
  font-size: 1rem;
}
</style>
