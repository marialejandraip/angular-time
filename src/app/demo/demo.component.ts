import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'project-angular';

  algo ='';

  items = ['Hamburguesa', 'Pizza', 'Empanada', 'Burrito']

  power = 10;


  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.items.push(this.algo)
    this.algo='';
  }

  deleteItem(index: number) {
    this.items.splice(index, 1)
  }

}
