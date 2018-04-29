import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
    { path: 'index', component: AppComponent },
    { path: 'usuarios', component: UsuarioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
