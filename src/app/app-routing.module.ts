import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from './views/home/home.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { LoginComponent } from './views/login/login.component';
import { UserComponent } from './views/user/user.component';
 import { GalleryDetailComponent } from './views/gallery-detail/gallery-detail.component'

 import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuardService] },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuardService] },
  { path: 'gallery-detail/:id', component: GalleryDetailComponent, canActivate: [AuthGuardService] }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuardService]

})
export class AppRoutingModule {}