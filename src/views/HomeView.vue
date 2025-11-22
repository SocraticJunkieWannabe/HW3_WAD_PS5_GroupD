<template>
  <posts-compo></posts-compo>
  <button class="resestButton" v-on:click="ResetLikes"> Resest likes </button>
</template>

<script>
// @ is an alias to /src
import PostsCompo from "@/components/Posts.vue"

export default {
  name: 'HomeView',
  components: {
    PostsCompo
  },

  methods: {
    ResetLikes: function() {
        this.$store.dispatch("ResetLikesAct") 
    }
  }

}
</script>
