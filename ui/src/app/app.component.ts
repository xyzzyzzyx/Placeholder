import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';

import { Client, CLIENT } from '../main';

@Component({
  selector: 'ui-root',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ui 5';

  private readonly client: Client = inject(CLIENT);

  constructor() {}

  ngOnInit(): void {
    console.log('Happy coding!', this.client);
  }
}
