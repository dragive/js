/*jshint esnext: true*/
class Produkt{
    constructor(id,nazwa,model,rok,cena,zuzycieEnergii)
    {
      this.id = id
      this.nazwa = nazwa
      this.model = model
      this.rok = rok
      this.cena = cena
      this.zuzycieEnergii = zuzycieEnergii
    }
    koszt(){return this.cena}
    kosztEnergii(){return this.cena * this.zuzycieEnergii}
    wiekProduktu(){return new Date().getFullYear() - this.rok}
    wiekProduktuLata(){
      let w = this.wiekProduktu()
      
      if(w === 1 ){return "1 rok"}
      if(w >=2){return ""+w+" lata"}
      return ""+w+" lat"
    }
    
  }
  
  class ListaProduktow{
    constructor(){
      this.list = []
    }
    wypiszProdukt(idProduktu){
      let out =''
      this.list.forEach((o)=>{if(o.id == idProduktu){out = o}})
      console.log(out)
      return out
    }
    
    wypiszWszystkieProdukty(){
      this.list.forEach((o)=>{console.log(o)})
    }
    
    dodajProdukt(produkt){
      this.list.push(produkt)
    }
    
    zmienProdukt(idProduktu,produkt){
      for(let i in list)
        {console.log(i)}
    }
    
  }
  
  let p = []
  let n = 5
  let lista = new ListaProduktow()
  while(n--){
    let t = new Produkt(n,'p'+n,'m'+n,2000+n,n*100,-n*0.1+n*n)
    lista.dodajProdukt(t)
  }
  
  
  console.log(lista)
  console.log(lista.wypiszProdukt(2))