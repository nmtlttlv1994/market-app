import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { UpdateItemFormComponent } from '../update-item-form/update-item-form.component';
@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  constructor(public dialog: MatDialog){

  }
  handleOpenEditItemForm(){
    console.log("onclickedit")
    this.dialog.open(UpdateItemFormComponent)
  }
}
