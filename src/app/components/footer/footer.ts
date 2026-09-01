import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  scrollToTop(event?: Event): void {

    if (event) {
      event.preventDefault();
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

}
