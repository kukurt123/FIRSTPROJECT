import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule {}
