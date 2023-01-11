import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public userList : any[] = [];
  public user:any;

  constructor() { }

public addUser(newUser:any) : void {
    this.userList.push(newUser);
    localStorage.setItem('userList', JSON.stringify(this.userList));
 }

 public getUserList() {
  this.userList = JSON.parse(localStorage.getItem('userList') || '[]');
  return this.userList;
 }

 public getUser(id:any) : void{
  this.userList = JSON.parse(localStorage.getItem('userList') || '[]');
   for (let i = 0; i <this.userList.length; i++) {
    const element = this.userList[i];
    if(id == element.id){
      this.user = this.userList[i];
      localStorage.setItem('singleUser', JSON.stringify(this.user))
    }
   }
 }

 public updateUser(user:any) : void {
  let newUserList = [];
  console.log("user id : ",user.id)
  for (let i = 0; i <this.userList.length; i++) {
    const element = this.userList[i];
    // console.log("element id : ",element.id) 
    if(user.id == element.id){
        newUserList.push(user);
      }else{
        newUserList.push(element)
      }
    }
    // console.log("new User list : ",newUserList)
    localStorage.setItem('userList', JSON.stringify(newUserList))
 }

 public deleteUser(id:any) : void {
  this.userList.splice(id,1);
  localStorage.setItem('userList', JSON.stringify(this.userList));
 }

}
