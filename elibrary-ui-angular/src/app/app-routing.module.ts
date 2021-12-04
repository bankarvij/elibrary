import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./app/admin/dashboard/dashboard.component";
import { LoginComponent } from "./app/login/login.component";
import { UserDashboardComponent } from "./app/user/dashboard/dashboard.component";

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
  