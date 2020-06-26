// ======================= Template ===============================
<template lang="pug">
  .blog.text-center
    h1 {{pageName}}
    p {{pageDesc}}
    
    

    .container

      .posts
        <BlogPosts v-for="post in posts" :key="post.id" :views="post.views" :date="post.date" :title="post.title" :contetn="post.contetn" :author="post.author" :category="post.category" />

      .sidebar
        BlogSidebar
</template>

// ======================== Script ================================
<script>
import BlogPosts from "@/components/blog/BlogPosts.vue";
import BlogSidebar from "@/components/blog/BlogSidebar.vue";
import JsonBlogPosts from "@/json/BlogPost.json";

export default {
  name: "Blog",

  components: {
    BlogPosts,
    BlogSidebar
  },

  data() {
    return {
      pageName: "Blog",
      pageDesc: "This is a blog page",
      posts: JsonBlogPosts
    };
  }
};
</script>

// ========================= Style =================================
<style lang="scss" scoped>
.blog {
  h1 {
    font: bold 5em sans-serif;
    letter-spacing: 0.5px;
  }

  p {
    font: 2.5em sans-serif;
    letter-spacing: 0.3px;
    margin-top: 0;
    margin-bottom: 100px;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
