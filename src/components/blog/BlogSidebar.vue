// ======================= Template ===============================
<template lang="pug">
    .sidebar {{title | uppercase}}
</template>

// ======================== Script ================================
<script>
export default {
  data() {
    return {
      title: "sidebar"
    };
  },

  filters: {
    uppercase(v) {
      return v.toUpperCase();
    }
  },

  name: "BlogSidebar"
};
</script>

// ========================= Style =================================
<style lang="scss" scoped></style>
