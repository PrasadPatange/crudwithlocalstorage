import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { ApiService } from 'src/app/services/api.service';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public userList : any[] = [];
  public deleted:boolean = false;
  public deletedUser:any;
  public country:any = [];

  constructor(public apiService: ApiService,private route: Router,public countryUrl : CountriesService){

  }

  ngOnInit(): void {
    this.userList = this.apiService.getUserList();
    this.countryUrl.allCountries().subscribe((data:any)=>{
      this.country = data.Countries;
    })
    
  }

  public deleteUser(user:User,id:any): void {
    this.apiService.deleteUser(id);
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
