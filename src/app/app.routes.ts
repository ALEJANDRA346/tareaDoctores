import { Routes } from '@angular/router';
import { ListarDoctoresComponent } from './componentes/listar-doctores/listar-doctores.component';
import { AgregarDoctorComponent } from './componentes/agregar-doctor/agregar-doctor.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';

export const routes: Routes = [
    {path: 'listar', component: ListarDoctoresComponent},
    {path: 'agregar', component: AgregarDoctorComponent},
    {path: 'consulta/:id', component: ConsultaComponent},
    {path: 'eliminar', component: EliminarComponent},
    {path: '', redirectTo: 'listar', pathMatch: 'full'},
    {path: '**', redirectTo: 'listar'}
];
