// var count = [0,0,0,0,0,0,0,0,0,0]
let input = "jajka, mleko, masło, chleb, pomidorki, cebula, oranżada, ogórek kiszony, herbata"


var c = input.split(', ').map(function(e, i) {
  return {nazwa:e, cena:Math.round(Math.random()*1000)/100};
})


console.table(...c)

function getRandomIndex(array){
  let len = array.length
  let randomIndex = Math.round(Math.random()*(len)-0.5) ;// równanie gwarantujące poprawny rozkład indeksów
//   count[randomIndex]++
  //console.log(randomIndex)
  return randomIndex
}

let n = Math.round(Math.random()*c.length/2-0.5)

let lista = []
let usedIndexes = []

while(n--){
  let newIndex = getRandomIndex(c)
  
  while(newIndex in usedIndexes)
    newIndex = getRandomIndex(c)
    
  usedIndexes.push(newIndex)
  
  lista.push({...c[newIndex],ilosc:Math.round(Math.random()*10+0.5)})
}

console.table(lista)
console.table("Cena sumaryczna: "+((lista.map(o=>{return o.ilosc*o.cena}))).reduce((o,j)=>{return o+j}))
