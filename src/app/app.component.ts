import { Component } from '@angular/core';
import {District} from './district';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number = 0;
  title:String = ' FORM ';
  displayresult:Boolean = false;
  maxAreaName:String;
  maxpopulationname:String;
  darray : District[] = new Array;


  sample : District = {
    name : "",
  }


  submitDistrict (){
    let newDistrict:District = {
      name : this.sample.name,
      area : this.sample.area,
      population : this.sample.population
    }
    console.log(newDistrict)
    this.darray.push(newDistrict);
    this.sample.name = ""
    this.sample.area = 0
    this.sample.population = 0
    this.count++
    // if(this.count >= 3){
        console.log(this.darray);
        let maxPopulation:Number = 0;
        let maxArea:Number = 0;
        
        for(let i = 0 ; i < this.darray.length ; i++){
            let temp:District = this.darray[i];
            if(temp.area > maxArea){
              maxArea = temp.area;
              this.maxAreaName = temp.name;
            }
            if(temp.population > maxPopulation){
              maxPopulation = temp.population;
              this.maxpopulationname = temp.name;
            }
        }

        this.displayresult = true;
    // }
  }
  




}
