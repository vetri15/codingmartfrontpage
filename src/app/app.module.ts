import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeadingComponent } from './components/heading/heading.component';
import { FooterComponent } from './components/footer/footer.component';
import { DistrictComponent } from './components/district/district.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    FooterComponent,
    DistrictComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
