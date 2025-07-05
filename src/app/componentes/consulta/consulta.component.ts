import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { ActivatedRoute } from '@angular/router';
import { DoctoresService } from '../../doctores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta',
  imports: [CommonModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {

  id!: number;
  doctor!: Personal | null;

  constructor(
    private route: ActivatedRoute,
    private servicio: DoctoresService
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number (params.get('id'));
      this.doctor = this.servicio.getById(this.id);
    })
  }

}
