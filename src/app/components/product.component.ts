import { OnChanges, OnInit, SimpleChanges, Component, Input, Output, EventEmitter, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '../product.model';

@Component ({
  selector: 'app-product',
  templateUrl:'./product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() clickedCart: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('constructor');
  }

  ngOnChanges( changes : SimpleChanges) {
    console.log('Cambiesitos!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOninit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    
  }
  addCart(){
    console.log('añadir al carrito');
    this.clickedCart.emit(this.product.id)
  }
}

//Decoradores, que tipo de rol va a cumplir
//server, pipe