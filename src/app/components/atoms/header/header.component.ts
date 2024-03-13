import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() srcImage: string = 'https://upload.wikimedia.org/wikipedia/commons/4/45/Banco_Pichincha_nuevo.png'

}
