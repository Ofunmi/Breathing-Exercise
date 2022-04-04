const conatiner = document.getElementById('container')
const text = document.getElementById('text')

 const totalTime = 7500
 const breatheTime = (totalTime / 5) * 2
 const holdTime = (totalTime / 5)
 

 breathAnimation()
 function breathAnimation() {
  text.innerText ='Breathe In'
  conatiner.className = 'container grow'

  setTimeout (() =>{
   text.innerText = 'Hold'

   setTimeout(()=>{
    text.innerText = 'Breathe out'
    conatiner.className = 'container shrink'
   }, holdTime)
  }, breatheTime)
 }

 setInterval(breathAnimation, totalTime)
