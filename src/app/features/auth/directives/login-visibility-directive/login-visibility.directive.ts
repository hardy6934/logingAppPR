import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appLoginVisibility]'
})
export class LoginVisibilityDirective {
 
  private subscription: Subscription;
  
    constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef,
      private authService: AuthService
    ) {
         this.authService.isLoggedIn$.pipe(takeUntilDestroyed())subscribe(isLoggedIn => {
          isLoggedIn ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear()
      });
    }
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();  
    }

  
}
