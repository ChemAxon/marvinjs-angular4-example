import { Component, OnInit } from '@angular/core';

declare var marvin: any;
declare var MarvinJSUtil:any;

@Component({
  selector: 'app-marvinjs',
  templateUrl: './marvinjs.component.html',
  styleUrls: ['./marvinjs.component.css']
})
export class MarvinjsComponent implements OnInit {
  
  constructor() { 
  }
  
  ngOnInit() {
    let thiz=this;
    MarvinJSUtil.getEditor("#sketch").then(function (sketcherInstance) {
            marvin = sketcherInstance;
        },function (error) {
            setTimeout(function() { thiz.ngOnInit(); }, 1000);
        });
  }
    
}
