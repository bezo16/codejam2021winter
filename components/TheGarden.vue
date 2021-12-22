<template>
  <section class="garden">
      <p>made by deers: {{ reindeerProduced }}  made by elf: {{ elfProduced }} made by santas: {{ santaProduced }}</p>
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
    reindeerProduced() {
      return this.$store.state.localStorage.reindeerProduced
    },
    elf() {
      return this.$store.state.localStorage.elf
    },
    elfProduced() {
      return this.$store.state.localStorage.elfProduced
    },
    santa() {
      return this.$store.state.localStorage.santa
    },
    santaProduced() {
      return this.$store.state.localStorage.santaProduced
    },
  },
  mounted() {
    setInterval(() => {
      let reindeerLsd = 0
      for(let i=0; i < this.reindeer; i++ ) {
        let ranNum = Math.ceil(Math.random() * 100)
        if(ranNum <= 5) reindeerLsd++
      }
      this.$store.commit('localStorage/addLsd',reindeerLsd)
      this.$store.commit('localStorage/updateProduction',{name:'reindeerProduced',value:reindeerLsd})

      let elfLsd = 0
      for(let i=0; i < this.reindeer; i++ ) {
        let ranNum = Math.ceil(Math.random() * 100)
        if(ranNum <= 15) elfLsd++
      }
      this.$store.commit('localStorage/addLsd',elfLsd)

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
