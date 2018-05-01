import { Component, OnInit } from '@angular/core';

import { UsuarioModel } from '../model/usuario.model';
import { OK } from '../model/httpStatus';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers: [UsuarioService]
})
export class CrearUsuarioComponent implements OnInit {
  private usuario: UsuarioModel;
  private valido: Boolean = true;
  private mensaje: String = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.usuario = new UsuarioModel();
  }

  ngOnInit() {
    document.getElementById('username').focus();
  }

  public guardar(): void {
    this.valido = this.usuarioService.esValido(this.usuario);

    if ( this.valido ) {
      this.usuarioService.guardar(this.usuario).subscribe(restResponse => {
        if ( restResponse.responseCode === OK ) {
          this.router.navigate(['/usuarios']);
        } else {
          this.mensaje = restResponse.mesagge;
          this.valido = false;
        }
      });
    } else {
      this.mensaje = 'Error al intentar guardar al usuario';
    }
  }
}
