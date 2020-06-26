<template>
  <div class="about">
    <h1 v-color>{{ pageName }}</h1>
    <p v-format.bold.greenColor="100">{{ pageDesc }}</p>
    <button type="button" class="btn btn-info">Info</button>
    <img width="500px" src="@/assets/images/about.svg" />
    <img width="20" src="@/assets/images/calendar.svg" />

    <!-- <router-link to="/contact"><h1>contact</h1></router-link> -->
  </div>
</template>

<script>
export default {
  name: 'About',

  data() {
    return {
      pageName: 'About us',
      pageDesc: 'This is an apout page',
    }
  },

  directives: {
    color: {
      bind: e => {
        e.style.color = 'blue'
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font: 5em sans-serif;
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  p {
    font: 2.5em sans-serif;
    letter-spacing: 0.5px;
    margin-top: 0;
  }
}
</style>
