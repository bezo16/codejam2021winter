<template>
  <main class="main">
    <WelcomingPage v-if="isTutorial" />
    <TheGarden />
    <TheGift />
    <TheStats />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    isTutorial() {
      return this.$store.state.localStorage.isTutorial
    }
  }
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
