let arr = ["Dżesika","Brajan","Janusz","Grażyna","Sebastian"]

for(let i =0;i<arr.length;i++){
  arr[i] = arr[i].replaceAll('a','4').replaceAll('A','4').replaceAll('e','3').replaceAll('E','3') ;
  if(arr[i].length >6)
    arr[i] = arr[i].slice(0,3)+"..."+arr[i].slice(-3)
}

console.log(arr)