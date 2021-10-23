let output = ""

for(let i =1;i<=100;i++){
  let out = i;
  if(i%2==0&&i%3==0){
    out = "FizBuz"
  }
  if(i%2!=0&&i%3==0){
    out = "Buz"
  }
  if(i%2==0&&i%3!=0){
    out = "Fiz"
  }
  if(i==1)
  output = output + out
  else
    output = output +" "+ out
}

console.log(output)