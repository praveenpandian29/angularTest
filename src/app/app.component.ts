import { Component, OnInit } from '@angular/core';
import { ConverterService } from './converter.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private converter: ConverterService) { }

  ngOnInit() {

  }



  pressKey(num: string) {
    this.converter.emitEventToInteger(num)
    console.log("You typed " + "<" + num + ">" + " with " + "<" + num + ">" +" the value clicked by the user")
  }
  clear() {
    this.converter.clearintegerValue(true)
  }



}
