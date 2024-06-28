import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VinilHomeComponent } from './vinil-home/vinil-home.component';
import { VinilAboutComponent } from './vinil-about/vinil-about.component';
import { VinilContactComponent } from './vinil-contact/vinil-contact.component';

export const routes: Routes = [
    {path: 'home', component: VinilHomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'about', component: VinilAboutComponent},
    {path: 'contact', component: VinilContactComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }