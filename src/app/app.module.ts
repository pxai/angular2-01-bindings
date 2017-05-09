import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { SpecialButtonComponent }  from './app.button';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule  ],
  declarations: [ AppComponent, 
                  SpecialButtonComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
