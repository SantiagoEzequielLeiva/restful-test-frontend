import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { RestResponse } from '../model/restResponse.model';
import { UsuarioModel } from '../model/usuario.model';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) { }

  /**
  * Obtenemos los usuarios del backend
  */
  public obtenerUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>('http://localhost:8080/usuarios');
  }

  /**
   * Obtenemos el detalle del usuario en base a su Id
   * @param idUsuario
   */
  public detalle(idUsuario: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>('http://localhost:8080/usuarios/' + idUsuario);
  }

  /**
  * Guardamos al usuario
  * @param usuario
  */
  public guardar(usuario: UsuarioModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/usuarios/guardar', JSON.stringify(usuario));
  }

  /**
   * Eliminamos al usuario en base a su Id
   * @param usuario
   */
  public eliminar(usuario: number): Promise<void> {
    const url = 'http://localhost:8080/usuarios/' + usuario;

    return this.http.delete(url, {headers: new HttpHeaders({'Content-Type': 'application/json'})})
    .toPromise()
    .then(() => null);
  }

  /**
  * Validamos los campos obligatorios
  * @param usuario
  */
  public esValido(usuario: UsuarioModel): boolean {
    if ( !usuario.username || !usuario.password ) {
      return false;
    }
    return true;
  }
}
