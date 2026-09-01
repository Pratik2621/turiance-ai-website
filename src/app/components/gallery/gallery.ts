import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-gallery',
  styleUrl: './gallery.scss',
  templateUrl: './gallery.html',
})
export class Gallery {

  showCharacter(character: string): void {

    console.log('Selected character:', character);

    if (character === 'deadpool') {
      document
        .getElementById('deadpool-details')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
    }

    if (character === 'wolverine') {
      document
        .getElementById('wolverine-details')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
    }

  }

}
