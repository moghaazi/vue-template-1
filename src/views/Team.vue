// ======================= Template
===============================================
<template lang="pug">
.our-team.container
    .title: h1 Team 
    .team
        img(src="https://i.picsum.photos/id/1/250/300.jpg")
        img(src="https://i.picsum.photos/id/10/250/300.jpg")
        img(src="https://i.picsum.photos/id/100/250/300.jpg")
        img(src="https://i.picsum.photos/id/30/250/300.jpg")
</template>

// ========================= Style
================================================
<style lang="scss" scoped>
.our-team {
  // Title
  .title {
    h1 {
      font: 5em sans-serif;
      font-weight: bold;
      letter-spacing: 0.5px;
      text-align: center;
    }
  }

  // Team
  .team {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 3px;
      margin: 10px;
    }
  }
}
</style>
