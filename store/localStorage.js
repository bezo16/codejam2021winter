export const state = () => ({
  points: 0,
  lsd: 0,
  clickChance: 90,

  reindeer: 0,
  elf: 0,
  santa: 0,



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
}
