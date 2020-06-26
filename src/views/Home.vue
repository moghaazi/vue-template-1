<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Btn />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Btn from "@/components/Btn.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Btn
  }
};
</script>
