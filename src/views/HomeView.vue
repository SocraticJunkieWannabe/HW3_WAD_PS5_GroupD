<template>
  <posts-compo></posts-compo>

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
    IncreaseLikes: function() {
        this.$store.dispatch("IncreaseLikesAct")
    },
    ResetLikes: function() {
        this.$store.dispatch("ResetLikesAct") 
    }
  }

}
</script>
