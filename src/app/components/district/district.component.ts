import { Component, Input, OnInit } from '@angular/core';
import {District} from './../../district';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  @Input() d:District;
  @Input() max:String;


  constructor() { }

  ngOnInit(): void {
    
  }

}
