import { Component } from '@angular/core';

@Component({
  selector: 'app-battles',
  standalone: true,
  imports: [],
  templateUrl: './battles.html',
  styleUrl: './battles.scss'
})
export class Battles {

  battleStarted = false;

  startBattle(): void {
    console.log('Battle started');
    this.battleStarted = true;
  }

}
