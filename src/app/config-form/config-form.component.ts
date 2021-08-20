import { Component, OnInit } from '@angular/core';
import { PropertiesConfService } from '../properties-conf.service';
import { Property } from '../model/model.property';
import { output } from '../model/model.output';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {
   properties:Property[] =[] ;
   property:any;

   fieldName = '';
   fieldType = '';
   listElements= [];
   fieldValue:any;
   ísDerived:boolean=false;

   formData:any;

    outputJSON :any;
    output:any;
   counter=0;


  setVariables(){
    this.property = this.confService.getProperty(this.counter,'',this.outputJSON);
    console.log(this.property);
    this.fieldName =this.property.fieldName;
    this.listElements = this.property.possibleElements;
    this.fieldValue = this.property.fieldvalue;
    this.ísDerived = this.property.ísDerived;
   // this.listElements.length;
  }


  constructor(public confService:PropertiesConfService) {   }

  ngOnInit(): void {

   // this.properties = this.confService.getProperties();
   // this.fieldName = this.confService.getProperties()[this.counter].property_name;
   // this.fieldType = this.confService.getProperties()[this.counter].input_type;
  // this.listElements = this.confService.getProperties()[this.counter].possible_values;
   this.setVariables();
    this.formData = new FormGroup({
      fieldValue : new FormControl(" ")
    //  fieldName1: new FormControl("test")
   });

  }
  onClickSubmit(data:any) {
    this.fieldValue = data.fieldValue;
     this.outputJSON = Object.assign(this.outputJSON||{}, {[this.fieldName]:this.fieldValue});
    this.counter = this.counter+1;
    console.log(JSON.stringify( this.outputJSON, undefined, 2));
    this.output = JSON.stringify( this.outputJSON, undefined, 2);
    if(this.confService.getProperties().length>this.counter)
    {
   // this.fieldName = this.confService.getProperties()[this.counter].property_name;
   // this.fieldType = this.confService.getProperties()[this.counter].input_type;
   // this.listElements = this.confService.getProperties()[this.counter].possible_values;
    this.setVariables();
   }
    console.log("counter value "+this.counter+" Property Name "+this.fieldName+" possible values "+this.listElements);
    this.formData.reset();
  }
  reset(){
    console.log("running reset")
    this.counter = 0;
   // this.fieldName = this.confService.getProperties()[this.counter].property_name;
   // this.fieldType = this.confService.getProperties()[this.counter].input_type;
   // this.listElements = this.confService.getProperties()[this.counter].possible_values;
   this.setVariables();
    this.outputJSON = {};
    this.output = '';
  }


}
