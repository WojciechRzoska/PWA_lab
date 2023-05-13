<template>
  <div>
    <p>Imie: {{ name }}</p>
    <p>pensja: {{ salary }}</p>
    <p>wiek: {{ age }}</p>
  </div>
</template>

<script>
export default {
  name: "Person",
  layout: "mainLayout",
  props: {
    name: {
      type: String,
      default: () => "",
    },
    salary: {
      type: String,
      default: () => "",
    },
    age: {
      type: Number,
    },
  },
};
</script>
<style></style>
