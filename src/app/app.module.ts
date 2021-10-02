import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { MonthYearInputComponent } from './components/month-year-input/month-year-input.component';
import { MonthlyDepositPreviewComponent } from './components/monthly-deposit-preview/monthly-deposit-preview.component';
import { SavingGoalFormComponent } from './components/saving-goal-form/saving-goal-form.component';
import { ThaButtonDirective } from './directives/tha-button.directive';
import { DifferenceInMonthsPipe } from './pipes/difference-in-months.pipe';
import { IsNextMonthPipe } from './pipes/is-next-month.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    MonthYearInputComponent,
    IsNextMonthPipe,
    DifferenceInMonthsPipe,
    SavingGoalFormComponent,
    MonthlyDepositPreviewComponent,
    ThaButtonDirective,
  ],
  imports: [BrowserModule, NgxMaskModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
