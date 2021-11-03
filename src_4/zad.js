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
      for(let i =0; i<this.list.length;i++){
        if(this.list[i].id == idProduktu){
          this.list[i] = produkt
          return 
        }
      }
        
    }
    
  }
  
  class Magazyn extends ListaProduktow{
    constructor(){
      super()
      this.amount = {}
    }
    
    dodajProdukt(produkt,ilosc){
      this.amount[produkt] = this.amount[produkt] || 0
      this.amount[produkt] += ilosc
      super.dodajProdukt(produkt)
    }
    
    zabierzProdukt(idProduktu){
      Object.entries(super.lista)
      let out =''
      this.list.forEach((o)=>{if(o.id == idProduktu){out = o}})
      if(out ==''){
        return
      }
      else{
        this.amount[out] = this.amount[out] -1||0 
      }
    }
    
    ileProduktow(idProduktu){
      let out =''
      this.list.forEach((o)=>{if(o.id == idProduktu){out = o}})
      if(out ==''){
        return 0
      }
      else{
        return this.amount[out] 
      }
    }
    
  }
  
  class Sklep extends ListaProduktow{
    constructor(){
      super()
      
    }
    dodajProdukt(id,nazwa,model,cena,zuzycieEnergii){
      if(id!=0&&(!id)){
        let id = Math.max(super.lista.map((o)=>{return o.id})) || 0
        super.dodajProdukt(id+1,nazwa,model,cena,zuzycieEnergii)
      }
    }
    
    
  }
  
  class Zamowienie{
    
    constructor(idProduktu){
      this.idProduktu = idProduktu
      this.lista = new ListaProduktow()
      this.magazyny = []
   }
   dodajMagazyn(){
     this.magazyny.push(new Magazyn())
   }
   zrealizujZamowienie(){
     this.magazyny.forEach((o)=>{
       if(o.ileProduktow(this.idProduktu)>0){
         o.zabierzProdukt(this.idProduktu)
       }
     })
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
  lista.wypiszProdukt(2)
  lista.zmienProdukt(2,new Produkt(22))
  lista.wypiszWszystkieProdukty()
  
  
  