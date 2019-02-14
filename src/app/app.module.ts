import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { screens } from './screens';
import { ThirdPartyModules } from './thirdPartyModules';

@NgModule({
  declarations: [
    AppComponent,
    screens
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ThirdPartyModules
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
