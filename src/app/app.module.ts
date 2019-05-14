import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavVarComponent } from './nav-var/nav-var.component';
import { IntroComponentComponent } from './intro-component/intro-component.component';
import { ProgramasComponentComponent } from './programas-component/programas-component.component';
import { EquivalenciaComponentComponent } from './equivalencia-component/equivalencia-component.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavVarComponent,
    IntroComponentComponent,
    ProgramasComponentComponent,
    EquivalenciaComponentComponent,
    TestComponentComponent,
    ContactoComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
