import Vue from "vue";

// Uppercase
Vue.filter("uppercase", function(v) {
  return v.toUpperCase();
});

// Reverse
Vue.filter("reverse", function(v) {
  return v
    .split("")
    .reverse()
    .join();
});

//  Shorten text
Vue.filter("shortText", function(v, textLength, readMore) {
  return v.substring(0, textLength) + readMore;
});
