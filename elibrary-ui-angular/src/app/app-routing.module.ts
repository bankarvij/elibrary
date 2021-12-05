import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { LoginAuthGuardService } from "./services/login-auth-guard.service";
import { UserDashboardComponent } from "./user/dashboard/dashboard.component";


const routes: Routes = [
    {
        path: 'admin/dashboard',
        component: DashboardComponent,
        canActivate: [LoginAuthGuardService]
    },
    {
        path: 'user/dashboard',
        component: UserDashboardComponent,
        canActivate: [LoginAuthGuardService]
    },
    {
      path: '',
      component: LoginComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
