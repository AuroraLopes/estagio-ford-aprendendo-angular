import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pacotes-main-components',
  templateUrl: './pacotes-main-components.component.html',
  styleUrls: ['./pacotes-main-components.component.css']
})
export class PacotesMainComponentsComponent {

  @Input() pacotes?: string;

}
