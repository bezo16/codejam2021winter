<template>
  <section class="garden">
      <h1>{{reindeer}}</h1>
      <h1>{{elf}}</h1>
      <h1>{{santa}}</h1>
  </section>
</template>

<script>
export default {
  computed: {
    reindeer() {
      return this.$store.state.localStorage.reindeer
    },
    elf() {
      return this.$store.state.localStorage.elf
    },
    santa() {
      return this.$store.state.localStorage.santa
    },
  }
}
</script>

<style>
  .garden {
    flex: 1;
    height: 100%;
  }
</style>
