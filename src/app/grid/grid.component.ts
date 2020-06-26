import { Component, OnInit, ViewChild } from '@angular/core';
import Prando from 'prando'
import { CountdownComponent, CountdownEvent } from 'ngx-countdown';

enum TimerStatus {
  Reset,
  Running,
  Paused
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  rng: Prando;
  board: Array<string> = new Array<string>();
  hidden: boolean = true;
  timesUp: boolean = true;
  seed: string = "";

  TimerStatus = TimerStatus;
  timerStatus: TimerStatus = TimerStatus.Reset;

  @ViewChild('counter') counter: CountdownComponent;

  constructor() { }

  ngOnInit(): void {
    
  }

  generateBoard() {
    this.rng = new Prando(this.seed);

    let die1: Array<string> = ["A", "E", "D", "N", "Z", "V"];
    let die2: Array<string> = ["O", "A", "Qu", "M", "B", "J"];
    let die3: Array<string> = ["T", "S", "L", "P", "E", "U"];
    let die4: Array<string> = ["O", "E", "S", "W", "N", "D"];
    let die5: Array<string> = ["N", "G", "V", "T", "I", "E"];
    let die6: Array<string> = ["B", "X", "O", "I", "R", "F"];
    let die7: Array<string> = ["Y", "G", "E", "U", "K", "L"];
    let die8: Array<string> = ["A", "E", "P", "C", "D", "M"];
    let die9: Array<string> = ["C", "T", "O", "A", "A", "I"];
    let die10: Array<string> = ["L", "R", "C", "S", "A", "E"];
    let die11: Array<string> = ["L", "B", "T", "Y", "I", "A"];
    let die12: Array<string> = ["F", "H", "E", "Y", "E", "I"];
    let die13: Array<string> = ["L", "W", "R", "G", "U", "I"];
    let die14: Array<string> = ["S", "H", "O", "A", "R", "M"];
    let die15: Array<string> = ["E", "I", "N", "P", "H", "S"];
    let die16: Array<string> = ["T", "K", "U", "O", "D", "N"];

    let dice: Array<Array<string>> = [
      die1, 
      die2,
      die3, 
      die4,
      die5, 
      die6, 
      die7,
      die8, 
      die9,
      die10, 
      die11, 
      die12,
      die13, 
      die14,
      die15, 
      die16];

      let tempBoard: Array<string> = new Array<string>();
      dice.forEach(die => {
        let index = Math.floor(this.rng.next() * die.length);
        tempBoard.push(die[index]);
      });

      this.board = this.shuffle(tempBoard);
  }

  shuffle(array: Array<string>) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(this.rng.next() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  onKey() {
    this.restart();
    this.generateBoard();
  }

  begin() {
    this.timesUp = false;
    this.hidden = false;
    this.timerStatus = TimerStatus.Running;
    this.counter.restart();
    this.counter.begin();
  }

  pause() {
    this.hidden = true;
    this.timerStatus = TimerStatus.Paused;
    this.counter.pause();
  }

  resume() {
    this.hidden = false;
    this.timerStatus = TimerStatus.Running;
    this.counter.resume();
  }

  restart() {
    this.hidden = true;
    this.timerStatus = TimerStatus.Reset;
    this.counter.restart();
  }

  handleEvent(e: CountdownEvent) {
    if (e.action === 'done') {
      this.timerStatus = TimerStatus.Reset;
      this.timesUp = true;
    }
  }
}
