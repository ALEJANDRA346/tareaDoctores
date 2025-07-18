import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacto',
  imports: [ ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {



  userForm!: FormGroup;
  mensajeExito:string="";

  constructor(
    public formBuilder: FormBuilder,
     private router: Router
  ){
    this.userForm=this.formBuilder.group({
      name:[ '', [Validators.required, Validators.minLength(3)] ],
      email: [ '', [Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit():void{
    if(this.userForm.valid){
      this.mensajeExito ='Formulario enviado correctamente'
    }
    setTimeout(() => {
      this.mensajeExito="";
      this.router.navigate(['/listar']);
    }, 3000);
  }
 

}
