import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appLoginState]'
})
export class LoginStateDirective {

  private subscription: Subscription;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private authService: AuthService
  ) {
      this.subscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', isLoggedIn ? 'green' : 'red');
        this.renderer.setProperty(this.el.nativeElement, 'innerText', isLoggedIn ? 'Logged In' : 'Logged Out');
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();  
  }
 
 
}
