import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
    { path: 'index', component: AppComponent },
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'usuarios/crear', component: CrearUsuarioComponent },
    { path: 'usuarios/:id/editar', component: EditarUsuarioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule],
})

export class AppRoutingModule { }
