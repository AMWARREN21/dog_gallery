import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(private translate: TranslateService) { }

  //function to change langauge displayed
  changeLang($event: Event) {
    let lang: any = ($event.target as HTMLLIElement).textContent
    this.translate.use(lang)
  }


  ngOnInit(): void {
  }

}
