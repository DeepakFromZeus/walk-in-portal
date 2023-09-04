import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PortalComponent } from './portal/portal.component';
import { JobDetailComponent } from './job-detail/job-detail.component';


const routes: Routes = [
  { path: "", component: PortalComponent },
  { path: "walk-in-details/:id", component: JobDetailComponent },
  { path: "login", component: LoginComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
