import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [{path:"",component:MainBodyComponent},{path:"signin",component:SigninComponent},{path:"login",component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
