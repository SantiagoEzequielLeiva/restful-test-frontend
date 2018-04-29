import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    /* { path: '', redirectTo: '/index', pathMatch: 'full' }, */
    { path: '', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
