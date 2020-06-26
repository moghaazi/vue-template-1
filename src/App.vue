<template>
  <div id="app">
    <HeaderNav />
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    HeaderNav
  }
};
</script>
