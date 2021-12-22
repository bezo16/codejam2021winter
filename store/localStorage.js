export const state = () => ({
  points: 0,
  lsd: 0,
  clickChance: 90,

  reindeer: 0,
  reindeerProduced: 0,
  elf: 0,
  elfProduced: 0,
  santa: 0,
  santaProduced: 0,



  achievements: {
    fastClicker: {unlocked:false,value:0},
    ultraClicker: {unlocked:false,value:0},
  },

})


export const mutations = {
  addPoints(state,points) {
    state.points += points
  },

  addLsd(state,lsd) {
    state.lsd += lsd
  },

  unlockAchi(state,achi) {
    console.log('mutation: unlockAchi')
    state.achievements[achi].unlocked = true
  },

  setAchi(state,achi) {
    state.achievements[achi.name].value = achi.value
  },

  buyReindeer(state) {
    state.reindeer++
  },

  buyElf(state) {
    state.elf++
  },

  buySanta(state) {
    state.santa++
  },

  updateProduction(state,obj) {
    state[obj.name] += obj.value
  }
}
