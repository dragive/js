function first(func){
    ret = []
    
    dimx = arguments.length ||0
    dimy = arguments[1].length ||0
    for(let i =0;i<dimy;i++){
      let temp_arr = []
      
      
      for(let y=1;y<dimx;y++){
        temp_arr.push(arguments[y][i])
        
      }
  
      ret.push(func(...temp_arr))
    }
    return ret
  }
  
  function second(beg,end){
    ret = []
    if(beg<end){
      for(let i =beg;i<=end;i++){
        ret.push(i)
      }
      
    }
    if(beg>end){
      for(let i =beg;i>=end;i--){
        ret.push(i)
      }
   
    }
    if(beg==end){
      ret.push(end)
    }
    ret.push(NaN)
    return ret
  }
  
  function third(st){
    let ret = {}
    
    let b = st.split('')
      b = b.forEach((a)=>{ret[a]=ret[a]||0;ret[a]++;})
    return ret
  }
  
  function fourth(arr){
    let ret = []
    
    arr = arr.filter((a,b,c,d)=>{return b%2==0;})
    let mx = Math.max(...arr)
    let mn = Math.min(...arr)
    let delta = mx-mn
    let shift = mn
  //   console.log(arr)
  //   console.log(delta)
  //   console.log(shift)
  
    return arr.map(v=>{return Math.round((v-shift)/delta*100)/100}).join(' ')
  }
  
  function fith(){
    let arr = Array.from({length: 5}, () => Math.round(Math.random() * 10+0.5));
  
    let even = arr.reduce((a,b,c)=>{if(b%2==0)return a+1 ;else return a},0)
    
    let multiplied = arr.reduce((a,b,c)=>{return a*b},1)
    
    return [even,multiplied]
  }
  
  console.log(first((x,y)=>{return {x:x,y:y}},[1,2,3],[-3,-2,-1]))
  
  console.log(first((x,y,z)=>{return x*y+z},[1,2,3],[-3,-2,-1],[0.1,0.2,0.3]))
  
  console.log(second(1,3))
  
  console.log(second(1,-3))
  
  console.log(third('abcdaaef  '))
  console.log(third('Ala ma kota'))
  
  console.log(fourth([1,2,3,4,5,6]))
  
  console.log(fith())
  