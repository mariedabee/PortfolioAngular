import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GroupCardComponent } from '../group-card/group-card.component';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
  standalone: true,
  imports: [CommonModule, GroupCardComponent],
})
export class GroupListComponent {
  @Input() groups: any[] | undefined;
  @Output() joinGroup = new EventEmitter<number>();

  onJoinGroup(groupId: number) {
    this.joinGroup.emit(groupId);
  }
}
