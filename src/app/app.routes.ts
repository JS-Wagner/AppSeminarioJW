import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VinilHomeComponent } from './vinil-home/vinil-home.component';

export const routes: Routes = [
    {path: 'home', component: VinilHomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    //{path: 'wishlist', component: WishlistComponent},
    //{path: 'about', component: AboutComponent},
    //{path: 'contact', component: ContactComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }