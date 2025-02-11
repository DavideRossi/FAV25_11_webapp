import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
  imports: [FormsModule]
})
export class TransferComponent {
  showForm = false;
  destinationAccount: string = '';
  amount: number = 0;

  @Output() transfer = new EventEmitter<number>();

  onNewTransfer() {
    this.showForm = true;
  }

  onProceed() {
    this.transfer.emit(this.amount);
    this.showForm = false;
    this.destinationAccount = '';
    this.amount = 0;
  }
}