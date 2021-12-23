<template>
  <section class="stats">
    <div class="stats-wrapper">
       <nav>
         <button @click="active = 'upgrades'">upgrades</button>
         <button @click="active = 'entities'">entities</button>
         <button @click="active = 'tips'">tips</button>
         <button @click="active = 'achievements'">achievements</button>
       </nav>

        <h2 class="lsd-h2">{{ lsd }} <img class="lsd" src="~/assets/img/lsd.svg" alt=""> </h2>

        <h1 v-if="active === 'upgrades'">upgrades</h1>

        <div v-if="active === 'entities'">
          <h2 class="title">Entities</h2>
          <div class="entities-item">
            <img src="~/assets/img/entities/reindeer1.png" alt="">
            <div>
              <h3>Reindeer</h3>
              <p>basic reindeer which was caught in wild forest regions, he is not that big help in finding lsd but sometimes luck is on his side.</p>
            </div>
            <button :disabled="lsd < 1" @click.self="buyReindeer">Buy Reindeer</button>
          </div>
          <div class="entities-item">
            <img src="~/assets/img/entities/elf1.png" alt="">
            <div>
              <h3>Reindeer</h3>
              <p>basic reindeer which was caught in wild forest regions, he is not that big help in finding lsd but sometimes luck is on his side.</p>
            </div>
            <button :disabled="lsd < 5" @click.self="buyElf">Buy Elf</button>
          </div>
          <div class="entities-item">
            <img src="~/assets/img/entities/santa1.png" alt="">
            <div>
              <h3>Reindeer</h3>
              <p>basic reindeer which was caught in wild forest regions, he is not that big help in finding lsd but sometimes luck is on his side.</p>
            </div>
            <button :disabled="lsd < 15" @click.self="buySanta">Buy Santa</button>
          </div>
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
      active: 'entities',
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
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .lsd-h2 {
    position: absolute;
    right: 25px;
    top: 10px;
  }

  .stats-wrapper {
    background: linear-gradient(rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.85)) , url(~/assets/img/statsBG.jpg);
    background-size: 100% 100%;
    width: 90%;
    height: 70%;
    padding: 25px;
    border-radius: 15px;
    color: white;
    position: relative;
    overflow: auto;
  }

  nav {
    margin-bottom: 20px;
  }

  nav > button {
    background: none;
    border: 1px solid white;
    border-radius: 5px;
    padding: 3px 5px;
    margin: 5px;
    color: white;
    cursor: pointer;
  }

  nav > button:hover {
      background: white;
      color: black;
  }

  .title {
    font-size: 3rem;
    margin-bottom: 30px;
  }

  .entities-item {
    padding: 25px 0px 15px 5px;
    background: rgb(31, 31, 2);
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  .entities-item > img {
    width: 75px;
    margin-right: 10px;
    margin-left: 5px;
  }

  .entities-item  h3 {
    font-size: 2rem;
  }

  .entities-item  p {
    max-width: 370px;
    line-height: 1.33;
    font-size: 1.25rem;
  }

  .entities-item > button {
    margin-left: auto;
    margin-right: 15px;
    padding: 3px 5px;
    border: 1px solid white;
    color: white;
    background: none;
    border-radius: 5px;
  }
</style>
