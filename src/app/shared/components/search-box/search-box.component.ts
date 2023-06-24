import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public evento1 = new EventEmitter<string>();

  enviarEvento(value: string): void {
    this.evento1.emit(value);
  }
}
