import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  textValue: any = '';
  inputValue: any = '';
  inputArray: any = [];
  constructor(private converter: ConverterService) { }

  ngOnInit() {

    this.converter.textEvent.subscribe((data) => {
      if (data != null && data != undefined) {
        this.inputValue = data;
        this.inputArray = this.inputValue.split(/\W+/);
        this.textValue = "";
        for (let value of this.inputArray) {
          if (value != "") {
            let integerValue = parseInt(value);
            let convertedValue = (integerValue <= 25) ? String.fromCharCode(integerValue + 65) : (integerValue >= 26) ? String.fromCharCode(integerValue % 26 + 65) : ""
            this.textValue += convertedValue;
          }
        }
      }
      else {
        this.textValue = 'Text'
      }
    })

    this.converter.cleartextEvent.subscribe((data) => {
      if (data != null && data != undefined) {
        this.textValue = this.textValue.substr(0, this.textValue.length - 1)
      }
    })
    
  }


  ngOnDestroy() {
    this.converter.textEvent.unsubscribe();
  }

}
