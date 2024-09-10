import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getProfile()
      .subscribe();
  }
}
