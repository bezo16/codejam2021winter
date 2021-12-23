export const state = () => ({
  points: 0,
  lsd: 0,
  clickChance: 90,
  clickProduced: 0,
  clickValue: 0,

  reindeer: 0,
  reindeerPositions: [],
  reindeerChance: 5,
  reindeerProduced: 0,

  elf: 0,
  elfPositions: [],
  elfChance: 15,
  elfProduced: 0,

  santa: 0,
  santaPositions: [],
  santaChance: 50,
  santaProduced: 0,



  achievements: {
    fastClicker: {unlocked:false,value:0},
    ultraClicker: {unlocked:false,value:0},
  },

  upgrades: {
    galvanization: false,
    renascence: false,
    all: [
      {name:'galvanization',cost:100,update:'clickPower',value:1,desc:'increase your click power by 1'},
      {name:'renascence',cost:1000,update:'clickPower',value:2,desc:'increase your click power by 2'},
    ]
  }

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

  unlockUpgrade(state,obj) {
    state.upgrades[obj.name] = true
  },

  setAchi(state,achi) {
    state.achievements[achi.name].value = achi.value
  },

  buyReindeer(state) {
    state.reindeer++
    state.reindeerPositions.push({left:Math.random() * 90 + 5,top:Math.random() * 90 + 5})
  },

  buyElf(state) {
    state.elf++
    state.elfPositions.push({left:Math.random() * 90 + 5,top:Math.random() * 90 + 5})
  },

  buySanta(state) {
    state.santa++
    state.santaPositions.push({left:Math.random() * 90 + 5,top:Math.random() * 90 + 5})
  },

  updateProduction(state,obj) {
    state[obj.name] += obj.value
  },

  updateOne(state,obj) {
    state[obj.name] += obj.value
  },
}
