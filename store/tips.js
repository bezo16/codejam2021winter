export const state = () => ({
  tips: [
    {score: 10,content: 'never use Float in layout structuring there are better alternatives, like flex,grid',category:'css'},
    {score: 20,content: 'always use semantic tags like: header,main,footer for better SEO',category:'html'},
    {score: 35,content: 'use === instead of == for type safety',category:'js'},
    {score: 50,content: 'declare variables via let,conts rather than var',category:'js'},
    {score: 70,content: 'learn basics of aria',category:'html'},
    {score: 100,content: 'to progress further in javascript learn some framework good choices are vue/react/svelte',category:'js'},
    {score: 140,content: 'dont forget to set max-width to containers, u can do it via clamp()',category:'css'},
    {score: 170,content: 'promises are on your side dont be afraid to use them',category:'js'},
    {score: 200,content: 'make sure you dont have any blocking css on site',category:'css'},
  ]
})
