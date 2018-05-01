import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { UsuarioService } from './usuario.service';
import { UsuarioModel } from '../model/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {

  private usuarios: Array<UsuarioModel>;

  constructor(private usuarioService: UsuarioService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.loadUsuarios();
  }

  private loadUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe(usuariosResponse => {
      this.usuarios = usuariosResponse;
    });
  }

  public eliminar(idUsuario): void {
    this.usuarioService.eliminar(idUsuario).then(() => {
      // tslint:disable-next-line:triple-equals
      this.usuarios = this.usuarios.filter(usuario => usuario.id != idUsuario);
    });
  }
}
