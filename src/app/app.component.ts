import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  template:`Username: {{ username }}`,
  standalone: true
})
export class UserComponent {
  username = 'Composição de componentes';;
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-user />`,
  imports: [UserComponent],
})
export class AppComponent {}
