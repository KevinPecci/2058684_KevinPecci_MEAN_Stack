import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { AppAttributeDirectiveComponent } from './app-attribute-directive/app-attribute-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    StructureDirectiveComponent,
    AppAttributeDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
