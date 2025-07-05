import { Component } from '@angular/core';
import { DoctoresService } from '../../doctores.service';
import { Personal } from '../../models/personal';

@Component({
  selector: 'app-eliminar',
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  mensajeEliminado:string="";
  timeoutId:any;

  doctores:Personal[] = [];

  constructor(private servicio:DoctoresService){}

  ngOnInit(): void {
    this.cargarDoctores();

  }

  cargarDoctores(): void {
    this.doctores = this.servicio.getAll();
  }


  eliminarDoctor(id:number){
    this.servicio.delete(id);
    console.log(`Doctor con ID ${id} eliminado.`);
    this.cargarDoctores();
    this.mensajeEliminado=`Doctor con ID ${id} eliminado correctamente.`;

    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(()=>{
      this.mensajeEliminado=""
    }, 3000);
  }
}
