<template>
  <main class="main">
    <TheGarden />
    <TheGift />
    <TheStats />
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
  main {
    height: 100vh;
    display: flex;
    justify-content: center;
    background: url('~/assets/img/garden/bg.png');
  }
</style>
