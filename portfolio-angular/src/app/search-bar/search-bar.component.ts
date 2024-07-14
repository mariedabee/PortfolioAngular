import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  ngOnInit() {
    this.onSearch(); // Emit the initial value when the component is initialized
  }

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
