import {Component} from '@angular/core';
import * as moment from 'moment';
import {BinaryTree} from '../structures/binaryTree';
let faker = require('faker');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public emails: string[] = [];
  public uniqueEmails: string[];
  public diff: any;

  public generateEmails() {
    // tell faker to start at a specific seed in their db
    faker.seed(1000);
    for (let i = 0; i < 50000; i++) {
      this.emails.push(faker.internet.email());
    }
    // force it to generate half of the emails that are duplicates
    faker.seed(1000);
    for (let i = 0; i < 50000; i++) {
      this.emails.push(faker.internet.email());
    }

  }

  public checkDuplicates(): void {
    let startTime = moment();
    let hashTable = [];
    let index = 0;
    let tree = new BinaryTree();
    this.emails.forEach((email) => {
      if (!tree.search(email)) {
        tree.append(email);
        hashTable[index++] = email;
      }
    });
    this.uniqueEmails = hashTable;
    let endTime = moment();
    this.diff = endTime.diff(startTime, 'milliseconds');
  }
}
