// ======================= Template ===============================
<template lang="pug">
    .post-box 
      .data
        span.views 
              img(src="@/assets/images/eye.svg")
              | {{views}} 
        span.date 
              img(src="@/assets/images/calendar.svg")
              | {{date}}

      h3.title {{title}}
      <!-- img(src="@/assets/images/about.svg" width="500") -->
      p.content {{contetn | shortText(150,' Read more ....') |uppercase}}
      
      .info
        .author 
          img(src="@/assets/images/writer.svg")
          | {{author | reverse}}
        .category 
          img(src="@/assets/images/interface.svg")
          | {{category | uppercase}}


</template>

// ======================== Script ================================
<script>
export default {
  props: ["views", "date", "title", "contetn", "author", "category"],
  name: "BlogPosts"
};
</script>

// ========================= Style ================================= //
<style lang="scss" scoped>
.post-box {
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  box-shadow: rgba(130, 121, 121, 0.2) 0px 0px 12px 2px;
  width: 650px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  cursor: pointer;
  transition: 0.2s;
  // background: linear-gradient(rgba(50, 4, 253, 0.7), rgba(153, 7, 250, 0.9)),
  // url(https://i.picsum.photos/id/122/1280/853.jpg) no-repeat top center;

  // Hover
  &:hover {
    box-shadow: rgba(130, 121, 121, 0.2) 0px 0px 20px 5px;
    transform: scale(1.1);
  }

  // Data ================================
  .data {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;

    // Views
    .views {
      border-radius: 3px;
      box-shadow: rgba(130, 121, 121, 0.2) 0px 0px 12px 0px;
      padding: 7px 12px;
      color: #888;
      letter-spacing: 1px;
    }

    // date
    .date {
      letter-spacing: 1px;
      border-radius: 3px;
      box-shadow: rgba(130, 121, 121, 0.2) 0px 0px 12px 0px;
      padding: 7px 12px;
      color: #888;
    }

    img {
      width: 20px;
      margin-right: 11px;
    }
  }

  // Title
  .title {
    font-size: 2.5em;
    letter-spacing: 1px;
    margin-top: 20px;
    font-weight: bold;
  }

  // Content
  .content {
    font: 1.2em sans-serif;
    line-height: 25px;
    letter-spacing: 0.5px;
  }

  // Info ================================
  .info {
    display: flex;
    justify-content: space-between;

    // Author
    .author {
      letter-spacing: 1px;
      border-radius: 3px;
      box-shadow: rgba(130, 121, 121, 0.2) 0px 0px 12px 0px;
      padding: 7px 12px;
      color: #888;
    }

    // Category
    .category {
      letter-spacing: 1px;
      border-radius: 3px;
      box-shadow: rgba(130, 121, 121, 0.2) 0px 0px 12px 0px;
      padding: 7px 12px;
      color: #888;
    }

    img {
      width: 20px;
      margin-right: 11px;
    }
  }
}
</style>
