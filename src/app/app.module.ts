import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'; 

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CreditcardComponent } from './creditcard/creditcard.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CreditcardComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
