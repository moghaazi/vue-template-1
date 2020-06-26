<template>
  <div class="container">
    <!-- <WelcomeMessage /> -->
    <form>
      <div class="contact">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Send</button>
      </div>
      <img width="500" src="../assets/images/sign-in.svg" />
    </form>
  </div>
</template>

<script>
import WelcomeMessage from "@/components/WelcomeMessage.vue";
export default {
  components: {
    WelcomeMessage
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;

  /* Input ============================== */
  input {
    margin-bottom: 50px;
    padding: 5px 20px;
    border-radius: 50px;
    border: none;
    background-color: transparent;
    box-shadow: rgba(130, 121, 121, 0.2) 0px 0px 12px 2px;
    outline: none;
    width: 500px;
    height: 60px;
    font: 1.2em sans-serif;

    // Placehoder
    &:focus::placeholder {
      opacity: 0;
      transition: 0.1s;
    }
  }

  /* Button ============================== */
  button {
    font: bold 2em sans-serif;
    padding: 10px;
    border-radius: 50px;
    border: none;
    box-shadow: rgba(130, 121, 121, 0.2) 0px 0px 12px 5px;
    color: #444;
    background-color: transparent;
    padding: 10px 20px;
    outline: none;
    cursor: pointer;
    margin-left: 28%;

    // Active
    &:active {
      transform: scale(0.8);
      transition: 0.2s;
    }
  }
}
</style>
