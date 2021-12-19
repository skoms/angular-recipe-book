import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @Output('routeChange') routeEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelectRoute(event: Event) {
    const { innerText } = event.target as HTMLAnchorElement;
    this.routeEvent.emit(innerText);
  }
}
