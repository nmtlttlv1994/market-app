import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatCardModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hide=true;
  fullName: string ='';
  email: string = '';
  password: string ='';
  rePassword: string ='';

  registerForm = new FormGroup({
    fullName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });
  constructor() {

  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Tại đây bạn có thể thực hiện các xử lý đăng nhập như gửi dữ liệu đăng nhập đến server, xác thực, vv.
  }
  handleRegister(){
    console.log('register')
  }
  handleLogin(){
    console.log('login')
  }
}
