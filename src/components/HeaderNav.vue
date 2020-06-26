// ======================= Template ===========================================
<template lang="pug">
  .header
    h1 Logo
    nav
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/team">Team</router-link>
      <router-link to="/about">About</router-link>
      <router-link  to="/contact">Contact</router-link>
    
</template>

// ======================== Script ============================================
<script>
export default {
  name: "HeaderNav"
};
</script>

// ========================= Style ============================================
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font: 4em sans-serif;
    font-weight: bold;
    color: #181a19;
    letter-spacing: 0.7px;
    transform: scale(1.5);
    position: relative;

    &::after {
      content: "Logo";
      position: absolute;
      top: -7px;
      left: 4px;
      color: #14e1c1;
      font-size: 65px;
    }
  }

  nav {
    // background-color: #0fe2c6;
    box-shadow: rgba(130, 121, 121, 0.2) 5px 0px 12px 5px;

    border-radius: 3px;
    padding: 30px;
    transform: scale(0.8);
    a {
      font: 1.9em sans-serif;
      color: #000;
      margin: 15px;
      text-decoration: none;
      font-weight: bold;
      letter-spacing: 0.5px;
      padding: 15px;
      transition: 0.2s;
      outline: none;

      // Hover
      &:hover {
        box-shadow: rgba(130, 121, 121, 0.2) 0px 0px 12px 5px;
        border-radius: 3px;
      }

      // Active
      &:active {
        transform: rotate(20degr);
        transition: 0.1s;
      }
    }

    .router-link-exact-active {
      box-shadow: rgba(130, 121, 121, 0.2) 0px 0px 12px 5px;
      border-radius: 3px;
    }
  }
}
</style>
