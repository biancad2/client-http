import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

interface Item {
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class ListService {
  list: Array<Item> = [
    { name: 'teste 1' },
    { name: 'teste 2' },
    { name: 'teste 3' }
  ];
  getItems() {
    return this.list;
  }

  addItem(name: string) {
    this.list.push({ name });
  }

  removeItem(item: Item) {
    const i = this.list.indexOf(item);
    if (i > -1) {
      this.list.splice(i, 1);
    }
  }

  constructor(private loggerService: LoggerService) { this.loggerService.add("ListService constructed"); }
}
