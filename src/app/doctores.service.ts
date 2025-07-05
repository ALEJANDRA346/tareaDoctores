import { Injectable } from '@angular/core';
import  plantilla  from './data/doctores.json';
import { Personal } from './models/personal'

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  doctores:Personal[]=plantilla;

  constructor() { }

  ngOnInit (): void{}


getAll():Personal[]{
  const recuperaDatos : Personal[] = JSON.parse(localStorage.getItem('doctores') ?? '[]');
  if (recuperaDatos.length === 0) {
    this.doctores = plantilla;
  } else {
    this.doctores = recuperaDatos;
  }
  return this.doctores;
}

getById(idDoc: number): Personal | null {
  const encontrado = this.doctores.find(doc => doc.id === idDoc);
  return encontrado || null;
}
create(objeto: Personal): void{
  this.doctores.push(objeto);
  localStorage.setItem('doctores', JSON.stringify(this.doctores));
}
update(objeto: Personal): void{
  const index = this.doctores.findIndex(doc => doc.id === objeto.id);
  if (index !== -1) {
    this.doctores[index] = objeto;
    localStorage.setItem('doctores', JSON.stringify(this.doctores));
  }
}
delete(idDoc: number): void{
  const index = this.doctores.findIndex(doc => doc.id === idDoc);
  if (index !== -1) {
    this.doctores.splice(index, 1);
    localStorage.setItem('doctores', JSON.stringify(this.doctores));
  }
}
}