<template>
  <section class="garden">
      <img v-for="(santa,index) in elf" :key="index" class="entity" :style="`left:${elfPositions[index].left}%;top:${elfPositions[index].top}%;`" src="~/assets/img/entities/elf1.png" alt="">
      <p>made by deers: {{ reindeerProduced }}  made by elf: {{ elfProduced }} made by santas: {{ santaProduced }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
    }
  },
  computed: {
    reindeer() {
      return this.$store.state.localStorage.reindeer
    },
    reindeerProduced() {
      return this.$store.state.localStorage.reindeerProduced
    },
    reindeerChance() {
      return this.$store.state.localStorage.reindeerChance
    },
    elf() {
      return this.$store.state.localStorage.elf
    },
    elfProduced() {
      return this.$store.state.localStorage.elfProduced
    },
    elfChance() {
      return this.$store.state.localStorage.elfChance
    },
    elfPositions() {
      return this.$store.state.localStorage.elfPositions
    },
    santa() {
      return this.$store.state.localStorage.santa
    },
    santaProduced() {
      return this.$store.state.localStorage.santaProduced
    },
    santaChance() {
      return this.$store.state.localStorage.santaChance
    },
  },
  methods: {
    randomNum() {
      return Math.ceil(Math.random() * 90) + 5
    }
  },
  mounted() {

      setInterval(() => {
      let reindeerLsd = 0
      for(let i=0; i < this.reindeer; i++ ) {
        let ranNum = Math.ceil(Math.random() * 100)
        if(ranNum <= this.reindeerChance) reindeerLsd++
      }
      this.$store.commit('localStorage/addLsd',reindeerLsd)
      this.$store.commit('localStorage/updateProduction',{name:'reindeerProduced',value:reindeerLsd})

      let elfLsd = 0
      for(let i = 0; i < this.elf; i++ ) {
        let ranNum = Math.ceil(Math.random() * 100)
        if(ranNum <= this.elfChance) elfLsd++
      }
      this.$store.commit('localStorage/addLsd',elfLsd)
      this.$store.commit('localStorage/updateProduction',{name:'elfProduced',value:elfLsd})


      let santaLsd = 0
      for(let i = 0; i < this.santa; i++ ) {
        let ranNum = Math.ceil(Math.random() * 100)
        if(ranNum <= this.santaChance) santaLsd++
      }
      this.$store.commit('localStorage/addLsd',santaLsd)
      this.$store.commit('localStorage/updateProduction',{name:'santaProduced',value:santaLsd})
    }, 1000);
  }
}
</script>

<style>
  .garden {
    flex: 1;
    height: 100%;
    position: relative;
  }

  .entity {
    position: absolute;
    width: 40px;
  }
</style>
