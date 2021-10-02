import { Component, OnInit } from '@angular/core';
import { addMonths } from 'date-fns';

@Component({
  selector: 'tha-saving-goal-form',
  templateUrl: './saving-goal-form.component.html',
  styleUrls: ['./saving-goal-form.component.scss'],
})
export class SavingGoalFormComponent implements OnInit {
  amount: number = 0;
  reachDate: Date = addMonths(new Date(), 1);

  constructor() {}

  ngOnInit() {}
}
