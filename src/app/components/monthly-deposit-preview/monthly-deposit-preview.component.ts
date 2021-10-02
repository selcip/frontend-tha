import { Component, Input } from '@angular/core';

@Component({
  selector: 'tha-monthly-deposit-preview',
  templateUrl: './monthly-deposit-preview.component.html',
  styleUrls: ['./monthly-deposit-preview.component.scss'],
})
export class MonthlyDepositPreviewComponent {
  @Input() amount: number = 0;
  @Input() reachDate: Date = new Date();
}
