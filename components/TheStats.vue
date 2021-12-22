<template>
  <section class="stats">
    <div class="stats-wrapper">
       <nav>
         <button @click="active = 'upgrades'">upgrades</button>
         <button @click="active = 'entities'">entities</button>
         <button @click="active = 'tips'">tips</button>
         <button @click="active = 'achievements'">achievements</button>
       </nav>

        <h2>LSD: {{ lsd }} </h2>

        <h1 v-if="active === 'upgrades'">upgrades</h1>

        <div v-if="active === 'entities'">

          <button :disabled="lsd <= 1" @click.self="buyReindeer">Buy Reindeer</button>
          <button :disabled="lsd <= 5" @click.self="buyElf">Buy Elf</button>
          <button :disabled="lsd <= 15" @click.self="buySanta">Buy Santa</button>
        </div>

        <h1 v-if="active === 'tips'">tips</h1>


        <div v-if="active === 'achievements'">
          <div v-if="points >= 100">
            <h1>Frist Steps</h1>
            <p>clicked 100 times</p>
          </div>
          <div v-if="points >= 1000">
            <h1>big advancement</h1>
            <p>clicked 1000 times</p>
          </div>
          <div v-if="fastClicker.unlocked">
            <h1>Fast clicker</h1>
            <p>clicked 40times in 10 seconds</p>
          </div>
          <div v-if="ultraClicker.unlocked">
            <h1>ultra clicker</h1>
            <p>clicked 70times in 10 seconds</p>
          </div>

        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: 'upgrades',
    }
  },
  methods: {
    buyReindeer() {
      console.log('buying Reindeer')
      this.$store.commit('localStorage/addLsd',-1)
      this.$store.commit('localStorage/buyReindeer')
    },
    buyElf() {
      console.log('buying Elf')
      this.$store.commit('localStorage/addLsd',-5)
      this.$store.commit('localStorage/buyElf')
    },
    buySanta() {
      console.log('buying Santa')
      this.$store.commit('localStorage/addLsd',-15)
      this.$store.commit('localStorage/buySanta')
    }
  },
  computed: {
    lsd() {
      return this.$store.state.localStorage.lsd
    },
    points() {
      return this.$store.state.localStorage.points
    },
    fastClicker() {
      return this.$store.state.localStorage.achievements.fastClicker
    },
    ultraClicker() {
      return this.$store.state.localStorage.achievements.fastClicker
    },

  },
  mounted() {
    localStorage.clear()
    setInterval(() => {
      this.$store.commit('localStorage/setAchi',{name:'fastClicker',value:0})
    }, 10000);

    setInterval(() => {
      if(this.fastClicker.value > 40 && !this.fastClicker.unlocked) this.$store.commit('localStorage/unlockAchi','fastClicker')
      if(this.fastClicker.value > 70 && !this.ultraClicker.unlocked) this.$store.commit('localStorage/unlockAchi','ultraClicker')
    }, 100);
  }
}
</script>

<style scoped>
  .stats {
    display: flex;
    flex: 1;
  }
</style>
