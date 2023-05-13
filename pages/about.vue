<template>
  <div class="about">
    <TopNav />
    <h1 class="about-title">About</h1>

    <Person
      :name="this.person.name"
      :salary="this.person.salary"
      :age="this.person.age"
    ></Person>
  </div>
</template>
<script>
import Customer from "../components/models/customer";
import TopNav from "../components/nav/TopNav.vue";
import BigImage from "../gallery/bigImage.vue";
import Person from "../components/person/person.vue";
export default {
  name: "AboutPage",
  layout: "custom",
  components: { TopNav, BigImage, Person },
  created() {
    this.person = this.setPerson("Wojtek", "1000zl", "26");
  },
  methods: {
    setPerson(imie, sallary, age) {
      return new Customer(imie, sallary, age);
    },
  },
  data() {
    return { person: null };
  },
};
</script>
<style scoped>
.about {
  width: 100dvw;
}
.about-title {
  color: red;
}
</style>
