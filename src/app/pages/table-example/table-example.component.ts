import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import {Car} from '../../shared/domain/car';
import { CarService } from 'src/app/shared/service/carservice';

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


  constructor(private cdRef:ChangeDetectorRef, private carService: CarService) {
    console.log(this.carService);
    
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


}