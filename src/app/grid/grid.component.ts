import { Component, OnInit } from '@angular/core';
import * as SeedRandom from 'seed-random';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  test: string = "1";

  constructor() { }

  ngOnInit(): void {
    let dice1: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice2: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice3: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice4: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice5: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice6: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice7: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice8: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice9: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice10: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice11: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice12: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice13: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice14: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice15: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice16: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice17: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice18: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice19: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice20: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice21: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice22: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice23: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice24: Array<string> = ["A", "B", "C", "D", "E", "F"];
    let dice25: Array<string> = ["A", "B", "C", "D", "E", "F"];

    let board: Array<Array<string>> = [
      dice1, 
      dice2,
      dice3, 
      dice4,
      dice5, 
      dice6, 
      dice7,
      dice8, 
      dice9,
      dice10, 
      dice11, 
      dice12,
      dice13, 
      dice14,
      dice15, 
      dice16, 
      dice17,
      dice18, 
      dice19,
      dice20, 
      dice21, 
      dice22,
      dice23, 
      dice24,
      dice25];

  }

}
