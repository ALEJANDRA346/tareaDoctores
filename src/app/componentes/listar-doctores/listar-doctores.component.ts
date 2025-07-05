import { Component } from '@angular/core';
import { DoctoresService } from '../../doctores.service';
import { Personal } from '../../models/personal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-doctores',
  imports: [CommonModule],
  templateUrl: './listar-doctores.component.html',
  styleUrl: './listar-doctores.component.css'
})
export class ListarDoctoresComponent {

  misDoctores!:Personal[];

  constructor(private doctoresService:DoctoresService){}

  ngOnInit(): void {
    this.misDoctores=this.doctoresService.getAll();
    console.log(this.doctoresService);
  }

}
