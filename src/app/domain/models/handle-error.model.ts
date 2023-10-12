export interface ErrorHttpProps {
  icon?:string;
  title?:string;
  text?:string;
}
export class ErrorHttp implements ErrorHttpProps {
  public icon:string;
  public title:string;
  public text:string;
  constructor(){
    this.icon = 'error';
    this.title =  'Error con el Servidor' ;
    this.text = 'No se pudo conectar con el servidor, recarga la pagina';
  }
}

export class SuccessHttp implements ErrorHttpProps {
  public icon:string;
  public title:string;
  public text:string;
  constructor(){
    this.icon = 'succces';
    this.title =  'Conexion correcta' ;
    this.text = 'Se ha cargado correctamente los personajes';
  }
}


