import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface Landing {
  header: string;
  paragraph: string;
}

@Component({
  selector: 'ui-splash',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss'
})
export class SplashComponent {

  public state: Observable<Landing> = of({
    header: 'Welcome',
    paragraph: 'This is the splash page.',
  });

}
