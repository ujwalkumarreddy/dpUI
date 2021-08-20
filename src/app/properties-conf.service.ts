import { Injectable } from '@angular/core';
import { Property } from './model/model.property';
import * as confFile from './conf/dp_transfer.json';

@Injectable({
  providedIn: 'root'
})
export class PropertiesConfService {
private properties:Property[]=confFile;
private property:Property[]=[];


getProperties():Property[]{
  return this.properties;
}


getProperty(counter: number, component: string, outputJSON:{}):{}{

  switch(this.properties[counter].input_type){
    case 'text':
    return {
     fieldName: this.properties[counter].property_name,
     ísDerived: false,
     possibleElements: [],
     fieldvalue: undefined
    };
    case 'list':
      return {
       fieldName: this.properties[counter].property_name,
       ísDerived: false,
       possibleElements: this.properties[counter].possible_values,
       fieldvalue: undefined
      };
    break;
    default:
      console.log('undefied field type');
      return {};
  }

}

  constructor() { }
}
