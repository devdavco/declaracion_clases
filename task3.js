export class Jugador {
  constructor(nombre,nivel) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.informacion = function(){
      return `${this.nombre} ha alcanzado el Nivel ${this.nivel}!`
    }
  }


}