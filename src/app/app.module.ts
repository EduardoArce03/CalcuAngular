import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu/menu.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaComponent } from './pages/acerca/acerca.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactoComponent,
    AcercaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
