import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public userList : any[] = [];
  public deleted:boolean = false;
  public deletedUser:any;

  constructor(public apiService: ApiService,private route: Router){

  }

  ngOnInit(): void {
    this.userList = this.apiService.getUserList();
  }
  public deleteUser(user:any): void {
    this.apiService.deleteUser(user.id);
    this.deletedUser = user.fname;
    this.deleted = true;
    setTimeout(() => {
      this.deleted = false; 
    }, 2000);
  }

  public resetForm() : void {
    localStorage.removeItem("singleUser");
  }

}
