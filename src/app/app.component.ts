import { Component } from '@angular/core'; 
import { LoginComponent } from './features/auth/components/login/login.component';
import { HomeComponent } from './features/homefolder/home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-root',
  imports: [ BreadcrumbsComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
}
