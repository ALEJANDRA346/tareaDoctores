import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personal } from '../../models/personal';
import { DoctoresService } from '../../doctores.service';

@Component({
  selector: 'app-agregar-doctor',
  imports: [FormsModule],
  templateUrl: './agregar-doctor.component.html',
  styleUrl: './agregar-doctor.component.css'
})
export class AgregarDoctorComponent {
  mensajeExito: string = '';

  doctor: Personal = {
    id: 0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: '',
    foto: '',
  }

  constructor(private doctoresService: DoctoresService) { }
  esFemenino: boolean = false;

  asignarFotoAleatoria() {
    let genero;
    const id = Math.floor(Math.random() * 100);
    if (this.esFemenino) {
      genero = 'women';
    } else {
      genero = 'men';
  }
    this.doctor.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;

}

guardar(){
  this.doctoresService.create(this.doctor);
  this.limpiar();
  console.log('Doctor: ',this.doctoresService);
  console.log('Es femenino?: ',this.esFemenino);
}

limpiar():void{
  this.doctor = {
    id: 0,
    nombre: '',
    especialidad: '',
    anios_experiencia: 0,
    ciudad: '',
    telefono: '',
    foto: '',
  };
  
  this.esFemenino = false;

  this.mensajeExito = 'Doctor agregado exitosamente';

  setTimeout(() => {
    this.mensajeExito = '';
  }, 3000);
}

}
