import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SideMainContentComponent } from './side-main-content/side-main-content.component';

const routes: Routes = [
  {path: '', component: SideMainContentComponent},
  {path: 'login', component: RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
