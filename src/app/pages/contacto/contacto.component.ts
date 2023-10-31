import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  id: string = ""
  name: string = ""
constructor(private router: Router){

}

  goAcerca(){
    alert("xd");
    console.log(this.name, this.id);
  }
}
