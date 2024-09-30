import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class GroupCardComponent {
  @Input() group: any;
  @Output() joinGroup = new EventEmitter<number>();

  onJoin() {
    this.joinGroup.emit(this.group.id);
  }
}
