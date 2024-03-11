import { Component } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-update-item-form',
  standalone: true,
  imports: [ FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,],
  templateUrl: './update-item-form.component.html',
  styleUrl: './update-item-form.component.scss'
})
export class UpdateItemFormComponent {
  item: any = {
    title: '',
    description: '',
    itemType: '',
    image: '',
  };
  onSubmit() {
    console.log('value', this.item);
  }
}
