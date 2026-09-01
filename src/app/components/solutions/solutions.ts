import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss'
})
export class Solutions {

  showCharacter(character: string): void {

    console.log('Selected character:', character);

    if (character === 'deadpool') {

      const deadpool =
        document.getElementById('deadpool-details');

      if (deadpool) {
        deadpool.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

    }

    if (character === 'wolverine') {

      const wolverine =
        document.getElementById('wolverine-details');

      if (wolverine) {
        wolverine.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

    }

  }

}
