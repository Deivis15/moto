import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {motos} from '../modelos/motos';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

//url que pasa nuestro backend y lo enlaza al proyecto frontend

url="http://localhost:4000/api/zapateria";

//obtener User trayendolo desde nuestro backedn
getUser(){
  return this.http.get<motos[]>(this.url);
}

// crear user y enviarlo a nuestro backend con el metodo post
createUser(user:motos){
  return this.http.post<motos>(this.url+"/create",user);
}



//obtener user mediante el id trayendolo desde nuestro backedn
getByid(id:string){
  return this.http.get<motos>(this.url+"/"+id);
}
getbyUser(id:string){
  return this.http.get<motos>(this.url+"/byid/"+id);
}

//actualizar nuestro user y enviarlo actualizado a nuestro backend
updateUser(user:motos){
  return this.http.put<motos>(this.url+"/update/"+user._id,user);
}
//eliminar user mediante su id enviado al backend
deleteUser(user:motos){
  return this.http.delete<motos>(this.url+"/delete/"+user._id);
}

}
