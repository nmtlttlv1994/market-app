import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
} from '@angular/material/dialog';
import { CreateItemFormComponent } from '../create-item-form/create-item-form.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ItemCardComponent, MatIconModule, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  items = [1, 1, 1, 1, 1, 1];

  constructor(public dialog: MatDialog){

  }
  handleOpenItemForm(){
    this.dialog.open(CreateItemFormComponent )
  }
}
