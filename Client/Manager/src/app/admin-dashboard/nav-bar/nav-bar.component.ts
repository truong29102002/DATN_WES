import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  /**
   *
   */
  constructor(private auth: AuthService) {
  }

  clickLogout() {
    this.auth.doLogout();
  }

}
