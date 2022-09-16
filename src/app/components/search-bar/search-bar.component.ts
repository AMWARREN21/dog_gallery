import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() filterParent: EventEmitter<any> = new EventEmitter()

  constructor() { }

  public filterBreeds(event: Event) {
    let inputValue = (event.target as HTMLInputElement).value
    this.filterParent.emit(inputValue)
  }

  ngOnInit(): void {
  }

}
