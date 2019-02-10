import { Component } from '@angular/core';
import { NavItem } from './navItems';

@Component({
  moduleId: module.id,
  selector: 'tv-navbar',
  templateUrl: 'navbar.template.html'
})

export class NavbarComponent {
  appName: string = "TV Flix App";

  navItems: NavItem[] = [
     { routerLink: '/', label: 'Home', active: false },
     { routerLink: '/search', label: 'Find Shows', active: false }
   ];

}