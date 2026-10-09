import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface Landing {
  header: string;
  paragraph: string;
}

@Component({
  selector: 'ui-splash',
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './splash.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './splash.component.scss',
})
export class SplashComponent {
  public state: Observable<Landing> = of({
    header: 'Welcome',
    paragraph: 'This is the splash page.',
  });
}
