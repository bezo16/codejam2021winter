<template>
  <section class="gift">
    <div class="gift-imgwrapper">
      <img 
       @click.stop="addPoints" class="gift-img" src="~/assets/img/gifts/gift1.png" alt="">
    </div>
    <h1 class="gift-points">{{ points }}</h1>
  </section>
</template>

<script>
export default {
  computed: {
    points() {
      return this.$store.state.localStorage.points
    },
    clickChance() {
      return this.$store.state.localStorage.clickChance
    },
    clickPower() {
      return this.$store.state.localStorage.clickPower
    },
  },
  methods: {
    addPoints() {
      this.$store.commit('localStorage/addPoints',this.clickPower)
      this.$store.state.localStorage.achievements.fastClicker.value++

      let ranNum = Math.ceil(Math.random() * 100)
      if(ranNum < this.clickChance) {
        this.$store.commit('localStorage/addLsd',1)
        this.$store.commit('localStorage/updateProduction',{name:'clickProduced',value: 1})

      }
    }
  }
}
</script>

<style scoped>
  .gift {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .gift-imgwrapper {
    height: 220px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }


  .gift-img {
    width: 180px;
    height: 180px;
    animation: float 3.5s ease-in-out infinite;
    background: none;
  }

  .gift-img:active {
    width: 190px;
    height: 190px;
  }

  .gift-points {
    text-align: center;
    font-size: 4.25rem;
    letter-spacing: 5px;
    font-weight: 400;
  }
</style>
