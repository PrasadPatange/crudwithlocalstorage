import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
  {
    path:'' , redirectTo:'userList', pathMatch:'full'
  },
  {
    path:'userList' , component:UserListComponent
  },
  {
    path:'addUser/:id' , component:AddUserComponent
  },
  {
    path:'addUser' , component:AddUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 