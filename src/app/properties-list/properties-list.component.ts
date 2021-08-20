import { Component, OnInit } from '@angular/core';
import { PropertiesConfService } from '../properties-conf.service';
import { Property } from '../model/model.property';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {
  property:Property[] = []

  constructor(public confService:PropertiesConfService) { }
  ngOnInit(): void {
   for(var i=0;i<this.confService.getProperties().length;i++)
   {
   this.property.push( this.confService.getProperties()[i]);
   }

  }

}
