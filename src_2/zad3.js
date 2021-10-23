function first(){
    let table = []
    
    while(table.reduce((a,b)=>a+b,0)<200){
      table.push(Math.round(Math.random()*9+1))
    }
    return table
    
  }
  
  function second(table){
    let minimum = Math.min(...table)
    console.log(minimum)
    for(let i =0;i<table.length;i++){
      if(table[i]==minimum){
        table.splice(i,1)
        break
      }
    }
    return table
  }
  
  function third(table){
    let maximum = Math.max(...table)
    console.log(maximum)
    for(let i =table.length-1;i>=0;i--){
      if(table[i]==maximum){
        table.splice(i,1)
        return table
      }
      
    }
    
  }
  
  function fourth(table){
    let vector = [0,0,0,0,0,0,0,0,0,0,0]
    for(let i of table){
      vector[i] = vector[i] || 0
      
      vector[i] +=1
    }
    
    for(let i=0;i<vector.length;i++){
      if(vector[i] === undefined || vector[i] == 0)
        continue
      else{
        console.log("Liczba "+i+" wystąpiła "+ vector[i]+" razy")
      }
    }
  }
  
  function fith(table){
    return table.splice(-10,10).concat(table)
  }
  
  
  let table = first()
  
  console.log("1 krok\n\n"+table)
  
  table = second(table)
  
  console.log("2 krok\n\n"+table)
  
  table = third(table)
  
  console.log("3 krok\n\n"+table)
  
  fourth(table)
  
  console.log("4 krok\n\n"+table)
  
  table = fith(table)
  
  console.log("5 krok\n\n"+table)
  
  
  
  
  
  
  