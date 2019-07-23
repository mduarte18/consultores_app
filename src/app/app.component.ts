import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  template: string =`<img src="blob:https://loading.io/a5404d4b-ddc0-45e7-91de-c5c5f0476716" />`;
  // template: string =`<img src="../loader.gif" />`;
  // blob:https://loading.io/a5404d4b-ddc0-45e7-91de-c5c5f0476716

  title = 'Hola Mundo';
}
