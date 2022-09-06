import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from '../pizza.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    pw: new FormControl('', [Validators.required])
  });


  constructor(private service: PizzaService, private router: Router) { }

  ngOnInit(): void {
  }

  pwAbsenden(): void { //pw Klartext? Meeeh
    this.service.pwCheck(this.loginForm.controls['pw'].value);

    //TODO:check vom Backend if pw=korrekt
    this.router.navigate(['/ground']);
  }
}
