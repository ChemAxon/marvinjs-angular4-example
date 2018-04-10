import { Component, OnInit } from '@angular/core';
import {MolData} from '../mol-data';

declare var marvin:any;

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
 
  molData: MolData = new MolData();
  
  constructor() { }
  
  ngOnInit() {
  }
  
  getMol():void {
    let thiz = this;
    marvin.exportStructure("mrv").then(function(source) {
        thiz.setMolSrc(source);
    }, function(error) {
        alert("Molecule export failed:"+error);	
    });
  }
  
  setMol(): void  {
    let thiz = this;
    marvin.importStructure("mrv", thiz.getMolSrc()).then(function(){
        console.log("molecule is set")
    }).catch(function(error) {
		alert(error);
	});
  }
  
  
  getMolSrc(): string {
    return this.molData.molSrc;
  }
  
  setMolSrc(src: string): void {
    this.molData.molSrc=src;
  }

}
