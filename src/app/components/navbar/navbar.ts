import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  mobileMenuOpen = false;


  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }


  closeMobileMenu(event?: Event): void {

    if (event) {
      event.preventDefault();

      const target = event.currentTarget as HTMLAnchorElement | null;
      const href = target?.getAttribute('href');

      this.mobileMenuOpen = false;

      if (href && href.startsWith('#')) {

        const element = document.querySelector(href);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

      }

      return;
    }

    this.mobileMenuOpen = false;
  }

}
