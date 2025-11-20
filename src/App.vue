<template>
  <!--Header and Footer there-->
  <header-compo></header-compo> 
  <footer-compo></footer-compo>
</template>

<script>
import HeaderCompo from "@/components/Header.vue";
import FooterCompo from "@/components/Footer.vue";

export default {
name: "App",
components: { HeaderCompo, FooterCompo},

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {

  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;
  
  overflow-x: hidden; /* hide horizontal scroll */

  min-height: 100vh;
}

</style>
