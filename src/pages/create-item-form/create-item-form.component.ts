import { Component } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-create-item-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule

  ],
  templateUrl: './create-item-form.component.html',
  styleUrl: './create-item-form.component.scss',
})
export class CreateItemFormComponent {
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
