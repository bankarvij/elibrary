import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { UserDashboardComponent } from "./user/dashboard/dashboard.component";


const routes: Routes = [
    {
        path: 'admin/dashboard',
        component: DashboardComponent
    },
    {
        path: 'user/dashboard',
        component: UserDashboardComponent
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
  