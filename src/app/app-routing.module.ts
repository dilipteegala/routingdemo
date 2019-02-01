import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
{path:'departments',component:DepartmentListComponent },
{path: 'employees',component:EmployeeListComponent },
{path: 'products',component:ProductsComponent },
{path: 'form',component:FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ DepartmentListComponent,EmployeeListComponent,ProductsComponent,FormComponent]