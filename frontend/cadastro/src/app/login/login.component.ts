import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, RouterLink, NavigationStart } from '@angular/router';

@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formularioUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,){
    this.formularioUsuario = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  ngOnInit() {

  }

  fazerLogin(){

    let usuario = this.formularioUsuario.value;

    // console.log(usuario)
    // console.log(usuario.email);
    // console.log(usuario.password);

    if (usuario.email === "done" && usuario.password === "123"){
      this.router.navigate(['/home']);

    } else {
      alert("Login incorreto, tente novamente.");

    }
    // console.log(this.formularioUsuario.value);
  }
}
