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
  },
  mounted() {
    setInterval(() => {
      let reindeerLsd = 0
      for(let i=0; i < this.reindeer; i++ ) {
        let ranNum = Math.ceil(Math.random() * 100)
        if(ranNum <= 5) reindeerLsd++
      }
      console.log(reindeerLsd)

      this.$store.commit('localStorage/addLsd',this.santa)
    }, 1000);
  }
}
</script>

<style>
  .garden {
    flex: 1;
    height: 100%;
  }
</style>
