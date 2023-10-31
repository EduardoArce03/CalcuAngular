import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

const routes: Routes = [
  {path: "paginas/contacto", component: ContactoComponent},
  {path: "paginas/acerca", component: AcercaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
