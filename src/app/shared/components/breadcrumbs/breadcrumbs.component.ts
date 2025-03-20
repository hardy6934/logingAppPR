import { Component, inject } from '@angular/core';
import { Breadcrumb, BreadcrumbService } from '../../../core/services/BreadcrumbService/breadcrumb.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink, NgFor, NgIf, CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {

  private breadcrumbService = inject(BreadcrumbService);
  breadcrumbs$: Observable<Breadcrumb[]> = this.breadcrumbService.breadcrumbs$;
  
}
