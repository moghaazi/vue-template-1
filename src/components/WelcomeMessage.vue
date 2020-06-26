<template>
  <!-- ============= Template ============================================================ -->
  <div class="welcom-message">
    <h1>Welcome to vue component</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, saepe!</p>
  </div>
</template>

<script>
// ============== Script ============================================================
export default {
  name: "WelcomMessge",
};
</script>

<style lang="scss" scoped>
/* ==================== Style =================================================  */
.welcom-message {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font: 4.5em sans-serif;
    font-weight: bold;
  }

  p {
    font: 1.5em sans-serif;
  }
}
</style>
