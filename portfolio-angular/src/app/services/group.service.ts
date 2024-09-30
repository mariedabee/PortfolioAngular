import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private groupsUrl = 'assets/groups.json'; // Path to the JSON file

  constructor(private http: HttpClient) {}

  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(this.groupsUrl);
  }

  joinGroup(groupId: number): Observable<any> {
    // Simulating a join request; for simplicity, this does nothing for now
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next({ message: 'Joined group successfully!' });
        observer.complete();
      }, 500);
    });
  }
}
