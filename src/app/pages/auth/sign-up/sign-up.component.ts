import { Genero } from './../../../models/genero';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  generos: Genero[] = [
    {
      name: 'Femenino',
      icon: 'female'
    },
    {
      name: 'Masculino',
      icon: 'male'
    }
  ];

  regForm!: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      identificacion: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contrasena: ['', [Validators.required,Validators.minLength(6)]],
      genero: ['', [Validators.required]]
    });
  }

  registrar(){
    if(this.regForm.valid){
      console.log(this.regForm.value);
    }
  }

}
