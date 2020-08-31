import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList = [];
  constructor(public us: UsersService) {}

  ngOnInit(): void {
    this.usersList = this.us.getUsersList();
  }
  search(query: string) {
    this.usersList = this.us.findUser(query);
  }
  sort(direction: string) {
    this.usersList = this.us.sortUsers(direction);
  }
}
