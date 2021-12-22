<template>
  <section class="garden">

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
