import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadcrumbsSubject = new BehaviorSubject<Breadcrumb[]>([])
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute)
  
  private customLabels: {[key: string]: string} = {}

  constructor() {
    this.router.events
    .pipe(filter((event)=>event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd)=>{
      this.updateBreadcrumbs(event.urlAfterRedirects);
    })
   }

   private updateBreadcrumbs(url: string) {
    const breadcrumbs: Breadcrumb[] = [];
    
    const segments = url.split('/').filter(segment => segment); // Разделяем путь по "/" и убираем пустые

    let accumulatedPath = '';
    for (const segment of segments) {
      accumulatedPath += `/${segment}`;
      breadcrumbs.push({
        label: this.getLabel(segment),
        url: accumulatedPath
      });
      console.log("path - " + accumulatedPath);
    }

    this.breadcrumbsSubject.next(breadcrumbs);
  }

  private getLabel(segment: string): string {
    const labels: { [key: string]: string } = {
      'subhome': 'Sub Home',
      'subsubhome': 'Sub Sub Home',
      'home': 'Home'
    };
    return labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1); // Делаем первую букву заглавной
  }
 

  //  // Обновление крошек при навигации
  // private updateBreadcrumbs() {
  //   let breadcrumbs: Breadcrumb[] = [];
  //   let currentRoute = this.activatedRoute.root;
  //   let url = '';

  //   while (currentRoute.children.length) {
  //     let childRoute = currentRoute.children[0];
  //     let routeConfig = childRoute.routeConfig;

  //     if (routeConfig?.path) {
  //       url += `/${routeConfig.path}`;

  //       breadcrumbs.push({
  //         label: this.customLabels[routeConfig.path] || routeConfig.path,
  //         url: url,
  //       });
  //     }

  //     currentRoute = childRoute;
  //   }

  //   this.breadcrumbsSubject.next(breadcrumbs);
  // }


  // // Метод для кастомных названий страниц
  // setCustomLabel(path: string, label: string) {
  //   this.customLabels[path] = label;
  //   this.updateBreadcrumbs(); 
  // }

}
