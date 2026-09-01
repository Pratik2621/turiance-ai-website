import { Component } from '@angular/core';

import { Navbar } from '../../components/navbar/navbar';
import { Solutions } from '../../components/solutions/solutions';
import { Battles } from '../../components/battles/battles';
import { Gallery } from '../../components/gallery/gallery';
import { Universe } from '../../components/universe/universe';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Solutions,
    Battles,
    Gallery,
    Universe,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
