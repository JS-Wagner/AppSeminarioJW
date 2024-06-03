import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViniloListComponent } from './vinilo-list/vinilo-list.component';
import { AppRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgbModule,
    ViniloListComponent,
    AppRoutes,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PunkStore';
  isCollapsed: boolean = false;
}
