import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'integer',
  templateUrl: './integer.component.html',
  styleUrls: ['./integer.component.css']
})
export class IntegerComponent implements OnInit {
  integerValue: any = '';
  constructor(private converter: ConverterService) { }

  ngOnInit(): void {
    this.converter.integerEvent.subscribe((data) => {
      if (data != null && data != undefined) {
        this.integerValue += data
        if (this.integerValue.slice(-1) == "#") {
          this.converter.emitEventToText(this.integerValue)
        }
      }
      else {
        this.integerValue = 'Integer'
      }
    })

    this.converter.clearintegerEvent.subscribe((data) => {
      this.integerValue = this.integerValue.substr(0, this.integerValue.length - 1)
      if (this.integerValue.slice(-1) == "#" || this.integerValue == '') {
        this.converter.cleartextValue(true)
      }

    })
  }

  ngOnDestroy() {
    this.converter.integerEvent.unsubscribe();
  }
}
