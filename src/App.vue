<template>
  <body>
    <SideBar />
    <main>
      <div id="topbar"></div>
      <div id="page-content">
        <div><router-view /></div>
        <div id="footer"></div>
      </div>
    </main>
  </body>
</template>

<script setup>
import SideBar from "./components/TheSideBar.vue";
</script>
<style scoped></style>
