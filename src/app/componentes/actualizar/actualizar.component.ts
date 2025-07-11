import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { DoctoresService } from '../../doctores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  imports: [],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {

  doctores: Personal[]=[];

  constructor(private Servicio: DoctoresService, private router: Router) { }

  ngOnInit(): void {
    this.doctores = this.Servicio.getAll();
  }

  irAEditar ( id : number){
    this.router. navigate(['/editar', id]);
  }

  

}
