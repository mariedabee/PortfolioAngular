import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { GroupListComponent } from "./group-list/group-list.component"; 
import { SearchBarComponent } from '../../search-bar/search-bar.component';

@Component({
    selector: 'app-support-group',
    imports: [GroupListComponent, SearchBarComponent], // Add SearchBarComponent to imports
    templateUrl: './support-group.component.html',
    styleUrls: ['./support-group.component.scss']
})
export class SupportGroupComponent implements OnInit {
  groups: any[] = [];
  filteredGroups: any[] = []; // Hold filtered groups here
  isVerified: boolean = false;

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groupService.getGroups().subscribe((data: any[]) => {
      this.groups = data;
      this.filteredGroups = data; // Initialize filteredGroups with all groups
    });

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

  // This method will be called whenever the search term changes
  onSearch(searchTerm: string) {
    if (searchTerm) {
      // Filter groups based on the search term
      this.filteredGroups = this.groups.filter(group =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      // If no search term, show all groups
      this.filteredGroups = [...this.groups];
    }
  }
  
}
