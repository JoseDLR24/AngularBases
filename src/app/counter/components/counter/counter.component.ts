import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Bienvenidos a Angular</p>
    <p>Counter: {{ counter }}</p>

    <button (click)="increaseBy()">+ 1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy()">- 1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy():void{
    this.counter += 1;
  }

  decreaseBy():void{
    this.counter -= 1;
  }

  resetCounter():void{
    this.counter = 10;
  }
}