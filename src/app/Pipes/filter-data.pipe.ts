import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData',
})
export class FilterDataPipe implements PipeTransform {

  
  constructor(){}

  ngOnInit(): void {}

  transform(value: any,countryID:any,stateID:any,key:any): any {
    if(key == "State"){
      console.log("Value : ", value[countryID]?.States);
      return value[countryID]?.States;
    }else if(key == "City"){
      console.log("Value City: ",  value[countryID]?.States[stateID].Cities);
      return  value[countryID]?.States[stateID].Cities;
    }
    
   
  }
  
}

// this.countryService.allCountries().subscribe((data:any)=>{
//   console.log("Filter Data : ",data.Countries);
//   this.countries = data.Countries;
// });

 // if(value?.States){
    //   return value?.States;
    // }else if(value?.Cities){
    //   return value?.Cities;
    // }else{
      // }   
      // console.log("State : ",this.countries[value])
  //  return this.countries[value].States
    // let a = value.States;
    // let b = value.Cities;
    // if(a == value.States){
    //   return value.States;
    // }
    // if(b == value.Cities){
    //   return value.Cities;
    // }
    
    
    // if(value.States.StateName){
    //   return value.States;
    // }else{
    //   return value.Cities;
    // }
    // if(value?.States){
      // return value.States;
    // }else{
      // return value.Cities;
    // }
    // return value;
    // this.countryService.allCountries().subscribe((data:any)=>{
    //   if(data){
    //     // return value;
    //     // console.log("Data : ",value)
    //   }else{
    //     // return value.States;
    //   }
    // });
    // return this.countries;

    // console.log("countryID : ",id);
    // value[id]
    // this.countryService.allCountries().subscribe((data:any)=>{
    //   this.states = data.Countries[id]?.States;
    //   console.log("GET States Data : ",this.states);
    //   return this.states;

    // });
    // console.log("outside : ",this.states)