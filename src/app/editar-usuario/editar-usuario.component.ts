import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioModel } from '../model/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';
import { OK } from '../model/httpStatus';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
  providers: [UsuarioService]
})
export class EditarUsuarioComponent implements OnInit {

  private usuario: UsuarioModel = new UsuarioModel();
  private valido: Boolean = true;
  private mensaje: String = '';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.usuarioService.detalle(params.id).subscribe(usuarioResponse => {
        this.usuario = usuarioResponse;

        document.getElementById('username').focus();
      });
    });
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
