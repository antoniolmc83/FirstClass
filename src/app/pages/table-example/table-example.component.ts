import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';

import {Car} from '../../shared/domain/car';
import { CarService } from 'src/app/shared/service/carservice';
import { metric } from 'src/app/shared/service/decorator';

import { text } from '@angular/core/src/render3';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent implements OnInit {


  cars: Car[];
  cols: any[];

  avgColWidth: number;

  mapColumnsSize = {
    vin: {default: 200, min: 200, max: 200, align: 'left'},
    brand: {default: 150, min: 100, max: 120, align: 'left'},
    color: {default: 150, min: 100, max: 120, align: 'left'},
    year: {default: 80, min: 60, max: 90, align: 'center'},
    category: {default: 150, min: 100, max: 120, align: 'right'},
    action: {default: 100, min: 100, max: 100, align: 'right' }
  };

  public text:string;


  constructor(private cdRef:ChangeDetectorRef, private carService: CarService,
    protected sanitizer: DomSanitizer,
    private zone:NgZone) {
    console.log(this.carService);
    this.text = 'Click this <a href="javascript: refresh(\'ss\')">link</a> here';

    /*window.angularComponentRef = {
      zone: this.zone, 
      componentFn: (value) => this.refresh(value), 
      component: this
    };*/
    console.log('reference added');
   }

  ngAfterViewChecked() {

    this.calcColumnSize();
    this.cdRef.detectChanges;
  }

  ngOnInit() {
    //this.carService.getCarsSmall().then( cars => this.cars = cars);
    this.cars = this.carService.getCarsSmall();
    console.log(this.cars);
    this.cols = [
      //{ field: 'vin', header: 'Vin'},
      { field: 'year', header: 'Year'},
      { field: 'brand', header: 'Brand'},
      { field: 'color', header: 'Color'},
      { field: 'category', header: 'Category'}
    ];
    this.calcColumnSize();
  }

  
  calcColumnSize(){
    const tableWidth = 850;
    this.avgColWidth = (tableWidth - this.mapColumnsSize.action.default - this.mapColumnsSize.vin.default) /this.cols.length;
    console.log('Size: ' + this.avgColWidth);
  }

  
  getColumnSize(column){
    var size = 0;
    var min = this.mapColumnsSize[column].min;
    var max = this.mapColumnsSize[column].max;
    switch (column) {
      case 'vin':
      case 'action':
        size = this.mapColumnsSize[column].default;
        break;
      default:
        size = this.avgColWidth > max ? max : this.avgColWidth < min ? min : this.avgColWidth;
        break;
    }
    
    return size + 'px' ;
  }

  getHtml(){
    let output = this.sanitizer.bypassSecurityTrustHtml(this.text);
    console.log(output);
    return output;
  }

  @metric()
  refresh(value){
    console.log('calledFromOutside ' + this.avgColWidth );
  }
  

}