import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { CarouselMainComponentComponent } from './carousel-main-component/carousel-main-component.component';
import { PacotesMainComponentsComponent } from './pacotes-main-components/pacotes-main-components.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MainComponentComponent,
    CarouselMainComponentComponent,
    PacotesMainComponentsComponent,
    FooterComponentComponent,
    ButtonComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
