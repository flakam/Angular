import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { WeatherDataService } from './weather-service.service'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ResultComponentComponent } from './result-component/result-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
//import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponentComponent,
    HeaderComponentComponent,
    SearchComponentComponent,
  //  FormComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
