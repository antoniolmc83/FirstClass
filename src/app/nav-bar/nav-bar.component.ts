import {Component , EventEmitter , Input , OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() navBarOptions: object[];
  @Output() optionPress = new EventEmitter();
  constructor() {
    console.log( this.navBarOptions );
  }

  ngOnInit() {
  }

  optionHandler(option) {
    this.optionPress.emit(option);
  }
}
