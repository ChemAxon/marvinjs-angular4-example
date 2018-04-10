/**
   Copyright 2018 ChemAxon Ltd.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
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
