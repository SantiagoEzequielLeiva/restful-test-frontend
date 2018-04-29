import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../model/usuario.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  /**
   * Obtenemos los usuarios del backend
   */
  public obtenerUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>('http://localhost:8080/usuarios');
  }

}
