<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Posts from "@/components/Posts.vue"

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Posts
  },

  methods: {
    IncreaseLikes: function() {
        this.$store.dispatch("IncreaseLikesAct")
    },
    ResetLikes: function() {
        this.$store.dispatch("ResetLikesAct") 
    }
  }

}
</script>
