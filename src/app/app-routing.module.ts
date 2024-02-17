import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () => import("./store/store.module").then(storeModule => storeModule.StoreModule),
      },
      {
        path: "profile",
        loadChildren: () => import("./customer/customer.module").then(customerModule => customerModule.CustomerModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
