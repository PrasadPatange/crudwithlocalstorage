import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { ApiService } from 'src/app/services/api.service';
import { CountriesService } from 'src/app/services/countries.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {


   email1 = "notvalidate";

   form:User = {
    id:'',
    fname: '',
    lname: '',
    email: '',
    phone:'',
    salary:0,
    designation: '',
    country: '',
    state: '',
    city: '',
  };

  public countries: any[] = [];
  public stateInfo: any[] = [];
  public cityInfo: any[] = [];
  public designation: any[] = [
    'Angular Developer',
    'React Developer',
    'Nest Developer',
    'MEAN Developer',
    'MERN Developer',
    'NodeJS Developer',
    'UI Developer',
    'Dot NET Developer',
    'SDE-I',
    'SDE-II',
  ];

  public data:any;
  public userData:any;
  public mode:string = 'add';
  public id:any = "";
  public submitted:boolean = false;
  public userName : any;

  constructor(
    public countryUrl: CountriesService,
    public apiService: ApiService,
    private route: Router,
    private actRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.data = this.apiService.getUserList();
    // console.log("UserList  : ",this.data);
    
    this.actRoute.paramMap.subscribe((data:any)=>{
      this.id = data.get('id');
      this.apiService.getUser(this.id);
      if(this.id == null){
        this.mode = "add";
      }
      else{
        this.mode = 'edit';
      }
    });
    this.userData = JSON.parse(localStorage.getItem('singleUser') || '{}');
    //  console.log("Single User : ",this.userData);
    this.form = {
      id:this.userData.id,
      fname:this.userData.fname,
      lname:this.userData.lname,
      email:this.userData.email,
      phone:this.userData.phone,
      salary:this.userData.salary,
      designation: this.userData.designation,
      country: this.userData.country,
      state: this.userData.state,
      city: this.userData.city,
    }
    
    this.getCountries();

  }

  public getCountries() : void {
    this.countryUrl.allCountries().subscribe(
      (data:any) => {
        if(this.mode=='add'){
          this.countries = data.Countries;
        }else{
          this.countries = data.Countries;
          this.stateInfo = this.countries[this.userData.country].States;
          this.cityInfo = this.stateInfo[this.userData.state].Cities;
        }

        // console.log("stateInfo: ",this.stateInfo);
        // console.log("cityInfo: ",this.cityInfo);


        // console.log('Countries : ', this.countries);
        // console.log('States : ', this.stateInfo);
        // console.log('Cities : ',  this.cityInfo);

      },
      (err:any) => {
        console.log('Error : ', err);
      }
    );
  }

  
  public onChangeDesignation(desValue: any) : void {
    console.log(desValue.target.value);
  }
  public onChangeCountry(countryValue: any) : void{
    this.stateInfo = this.countries[countryValue.target.value].States;
    // console.log("coutry name : ",this.form.country);
    // console.log(" States : ",this.countries[countryValue.target.value].States);

    // console.log(countryValue.target.value);
  }

  public onChangeState(stateValue: any) : void {
    
    this.cityInfo = this.stateInfo[stateValue.target.value].Cities;

    // console.log("city : ",this.cityInfo);
  }
  public onChangeCity(cityValue: any) : void {
    // console.log(" States name : ", this.stateInfo[stateValue.target.value].StateName);
    // this.cityInfo = this.stateInfo[stateValue.target.value].Cities;
    // this.form.city = this.cityInfo[cityValue.target.value];
    // console.log("City : ",  this.form.city);
  }

  public onSubmit(userForm: NgForm) : void {
    if(userForm.form.valid){
      console.log("valid")
      if(this.mode == "add"){
        this.apiService.addUser({...userForm.value,id:uuidv4()});
        this.userName = userForm.value.fname;
        this.submitted = true;
      }else{
        this.apiService.updateUser(userForm.value);
        this.userName = userForm.value.fname;
        this.submitted = true;
        
      }
      setTimeout(() => {
        this.route.navigateByUrl('/userList');
      }, 3000);

    }else{
      // alert(" Please Enter Valid User Information. ( NOTE : All fields are Mandatory. )");
    }
  }
}
