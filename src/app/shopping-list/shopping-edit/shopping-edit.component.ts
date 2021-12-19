import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass'],
})
export class ShoppingEditComponent implements OnInit {
  @Output('ingredientAdd') addEvent = new EventEmitter<Ingredient>();
  name = '';
  amount = 0;
  measurement = 'g';

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    if (this.name && this.amount) {
      this.addEvent.emit({
        name: this.name,
        quantity: this.amount,
        measurement: this.measurement,
      });
    }
  }
}
