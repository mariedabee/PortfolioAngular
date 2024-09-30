import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { GroupListComponent } from "./group-list/group-list.component";

@Component({
  selector: 'app-support-group',
  standalone: true,
  imports: [GroupListComponent],
  templateUrl: './support-group.component.html',
  styleUrl: './support-group.component.scss',
})
export class SupportGroupComponent implements OnInit {
  groups: any[] = [];
  isVerified: boolean = false;

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groupService.getGroups().subscribe((data: any[]) => {
      this.groups = data;
    });

    // Simulating verification, you would replace this with actual logic
    this.isVerified = true;
  }

  onJoinGroup(groupId: number) {
    if (!this.isVerified) {
      alert('You must be a verified user to join a group.');
      return;
    }

    this.groupService.joinGroup(groupId).subscribe(
      () => alert('Successfully joined the group!'),
      () => alert('Failed to join the group. Please try again.')
    );
  }
}