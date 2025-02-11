import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { TransferComponent } from './transfer/transfer.component';

@Component({
  selector: 'app-root',
  imports: [BalanceComponent, TransferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bank-angular';
  balance = 1000;

  onTransfer(amount: number) {
    this.balance -= amount;
  }
}
