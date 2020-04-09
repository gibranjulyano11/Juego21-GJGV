
class Palo {
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Carta {
    constructor(rotula,palo,valor,imagen){
        this.rotula = rotula;
        this.palo = palo;
        this.valor = valor;
        this.imagen = imagen;
    }
}

class Fabrica {
    constructor(){
        this.mazoMezclado = [];
        this.mazo = [];
        this.palo = [new Palo("♥"), new Palo("♦"), new Palo("♣"), new Palo("♠")];
        this.rotulas = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    }
    
    crear(){
        var valor = [0]
        if(this.mazo.length == 0){
            this.palo.forEach(element => {
                this.rotulas.forEach(element2 => {
                    if(element2 == "A"){
                        valor = [1,11]
                        
                    }
                    else if(element2 == "J" || element2 == "Q" || element2 == "K"){
                         valor = [10];
                    }
                    else{
                         valor = [parseInt(element2)];
                    }
                    
                    let carta = new Carta(element2,element.nombre, valor, "corazones");  
                    this.mazo.push(carta);
                })  
            })
        }
        return this.mazo  
    }
    
    mezclar(){

        let cantidadBaraja = this.mazo.length;
        let posicionAleatoria;


        this.mazo.forEach((item) => {

            if(cantidadBaraja != 0){
                posicionAleatoria = Math.floor(Math.random() * cantidadBaraja);
                cantidadBaraja -= 1;

                this.mazoMezclado[posicionAleatoria] = item;
            }
        })

        return this.mazoMezclado;
    }
    
    pedir(){
        let lo = this.mazo.pop();
        let cartar = this.mazo.length
        console.log(cartar )
    }
}