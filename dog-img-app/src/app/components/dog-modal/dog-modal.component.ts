import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalImage } from '../../models/DogImage';

@Component({
  selector: 'app-dog-modal',
  templateUrl: './dog-modal.component.html',
  styleUrls: ['./dog-modal.component.css']
})
export class DogModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalImage) {

  }

  ngOnInit(): void {
  }

}
