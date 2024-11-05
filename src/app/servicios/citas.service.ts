import { Injectable } from '@angular/core';
import { Cita } from '../clases/cita';
// import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';
import { returnDownBackSharp } from 'ionicons/icons';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  // lista estatica de citas para probar antes de ejecutar sqlite
  private _citas:Cita[] = [
    new Cita("cita 1", "autor 1"),
    new Cita("cita 2", "autor 2"),
    new Cita("cita 3", "autor 3"),
  ]


/*   sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  db!: SQLiteConnection;
  
  plataforma:string = ""

  DB_NAME: string = "lista_citas";
  DB_ENCRIPTADA: boolean = false;
  DB_MODE: string = "no-encryption";
  DB_VERSION: number = 1;
  DB_READ_ONLY: boolean = false;
  DB_SQL_TABLAS: string = `
    CREATE TABLE IF NOT EXISTS lista_citas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombreCita TEXT NOT NULL,
      autor TEXT NOT NULL
    );
  
  `  
  ;*/
  
  constructor() { }

// codigo para la conexion con sqlite, revisar si mantener aqui o dejarlo quizas en otra clase o servicio aparte
/*   private async _iniciarPluginWeb(): Promise<void> {    
    await customElements.whenDefined('jeep-sqlite')
    const jeepSqliteEl = document.querySelector("jeep-sqlite")
    if( jeepSqliteEl != null ) {      
      await this.sqlite.initWebStore()            
    }
} */

/* async iniciarPlugin() {    
  this.plataforma = Capacitor.getPlatform()
  if(this.plataforma == "web") {
    await this._iniciarPluginWeb()
  }
  await this.abrirConexion()
  await this.db.execute(this.DB_SQL_TABLAS)             
} */

/* async abrirConexion() {                    
  const ret = await this.sqlite.checkConnectionsConsistency() 
  const isConn = (await this.sqlite.isConnection(this.DB_NAME, this.DB_READ_ONLY)).result
  if(ret.result && isConn) {
    this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_READ_ONLY)      
  } else {
    this.db = await this.sqlite.createConnection(
      this.DB_NAME,
      this.DB_ENCRIPTADA,
      this.DB_MODE,
      this.DB_VERSION,
      this.DB_READ_ONLY
    )
  } */

  agregarCita(p:Cita){
    this._citas.push(p)
  }

  obtenerCita(){
    return  this._citas
    console.log("ObtenerCita svc: ", this._citas)

  }

  obtenerCitaRandom(){
    //Obtengo una cita aleatoria 
    return this._citas[Math.floor(Math.random() * this._citas.length)]
  }


//FUNCIONES QUE USARE PARA LA CONEXION CON SQL Y LAS CITAS
//   async getProductos():Promise<Producto[]> {    
//     const sql = `SELECT * FROM ${this.DB_TABLE_NAME}`      
//     const resultado = await this.db.query(sql)
//     return resultado?.values ?? []
// }
// async agregarProducto(p:Producto):Promise<void> {    
//     const sql = `INSERT INTO ${this.DB_TABLE_NAME}(${this.DB_COL_PROD}, ${this.DB_COL_COMP}) VALUES(?, ?)`
//     await this.db.run(sql, [p.nombre, p.comprado])    
// }

}
