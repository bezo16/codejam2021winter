<template>
  <section class="welpage">
    <h2 class="welpage-title">SANTA HAS CRASHED !!!</h2>
    <p class="welpage-para">what a bad karma coincidence, santa has crashed, your must help him otherwise kids wont have their gifts. Sledges are broken and all LSD went to waste, you must collect 1000 LSD to boost santas reindeers so they can fly. But there must be some luck on our side we found magic gift which can give us some lsd, click on present and help santa, with collected lsd u can buy reindeers,elfs,and mini fake santas which can help u find LSD and even upgrade them. Good luck in saving Chritmas!</p>
    <button @click="finishTutorial" class="welpage-btn">SAVE CHRISTMAS!</button>
  </section>
</template>

<script>
export default {
  methods: {
    finishTutorial() {
      this.$store.commit('localStorage/finishTutorial')
    }
  }
}
</script>

<style scoped>
  .welpage {
    position: fixed;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .welpage-title {
    font-size: 4rem;
    margin-bottom: 50px;
  }

  .welpage-para {
    font-size: 2rem;
    margin-bottom: 25px;
  }

  .welpage-btn {
    border: 1px solid grey;
    border-radius: 100px;
    padding: 20px;
    font-size: 2.5rem;
    background: none;
  }

  .welpage-btn:hover {
    background: rgb(206, 206, 57);
  }
</style>
