import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  username: string = '';
  paraContent: boolean = false;
  msgLogs: string[] = [];

  resetInputValue() {
    this.username = '';
  }

  toggleParaDisplay() {
    this.msgLogs.push('massage logged');
    this.paraContent = !this.paraContent;
  }

  deleteItem(index: number) {
    this.msgLogs.splice(index, 1);
  }
}
