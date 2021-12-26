<template>
  <main @click="gardenClicked" class="main">
    <WelcomingPage v-if="isTutorial" />
    <TheGarden/>
    <TheGift />
    <TheStats />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      audio: null,
      isPlaying: false,
      interval: null,
    }
  },
  computed: {
    isTutorial() {
      return this.$store.state.localStorage.isTutorial
    }
  },
  methods: {
    gardenClicked() {
      if(!this.isPlaying) this.audio.play()
      this.isPlaying = !this.isPlaying
      if(!this.interval) setInterval(() => {
          if(this.audio.paused)this.audio.play()
        }, 1000);

    }
  },
  mounted() {
    this.audio = new Audio('/music.mp3')
    this.audio.volume = 0.02
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
