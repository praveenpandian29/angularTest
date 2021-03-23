import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IntegerComponent } from './integer/integer.component';
import { TextComponent } from './text/text.component';
import { ConverterService } from './converter.service';


@NgModule({
  declarations: [
    AppComponent,
    IntegerComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
