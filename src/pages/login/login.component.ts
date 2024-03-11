import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterLink,FormsModule,MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email?: string = '';
  password?: string ='';

  constructor() {

  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Tại đây bạn có thể thực hiện các xử lý đăng nhập như gửi dữ liệu đăng nhập đến server, xác thực, vv.
  }
}
