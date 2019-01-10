//clase principal
class classServicio {
  constructor(variables){
    //..Nada por aquí
    this.variables = {
      uno:'Uno',
      dos:'Dos',
      tres:'Tres'
    }
  }
  getVariables(){
    return this.variables;
  }
  setVariables(vari){
    this.variables.uno = vari;
  }
}

const servicio = new classServicio();



export { servicio };
