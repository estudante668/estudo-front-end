import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `app.component.html`,
  styleUrl:`app.component.scss`,
  imports: [RouterOutlet],
})
export class AppComponent {
  
  listaUsuarios =[{id: 1, nome:'Jose'},{id: 2, nome:'Maria'},{id: 3, nome:'Euniza'},]
}
