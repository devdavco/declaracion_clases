export class Jugador {
  constructor(nombre,nivel) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.informacion = function(){
      return `${this.nombre} ha alcanzado el Nivel ${this.nivel}!`
    }
    this.subirNivel = function(experiencia){
    this.experiencia = experiencia;

      if(this.experiencia>=300){
        this.nivel +=2

      }else if (this.experiencia >=100 && this.experiencia <=299){
        this.nivel +=1
      }
    }
  }


}

const jugador1 = new Jugador("Juan",1,200);

console.log(jugador1.informacion())
jugador1.subirNivel(300)
console.log(jugador1.informacion())

