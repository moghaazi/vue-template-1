import Vue from "vue";

// Custom format
Vue.directive("format", {
  bind: (e, binding) => {
    e.style.fontSize = binding.value + `px`;

    binding.modifiers.greenColor ? (e.style.color = "#14e1c1") : false;
    binding.modifiers.bold ? (e.style.fontWeight = "bold") : false;
  }
});
