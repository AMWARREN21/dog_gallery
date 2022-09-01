import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ModalImage } from '../../../models/DogImage';

@Component({
  selector: 'app-dog-modal',
  templateUrl: './dog-modal.component.html',
  styleUrls: ['./dog-modal.component.css']
})
export class DogModalComponent implements OnInit {

  //taking in data that can be used in template
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalImage, public translate: TranslateService) {

  }

  ngOnInit(): void {
  }

}
