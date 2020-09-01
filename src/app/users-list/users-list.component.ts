import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { query } from '@angular/animations';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList = [];
  username: string;
  name: string;
  role: string;
  selectedList: any;
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
  addUser() {
    this.us.addUser({
      id: Math.floor(Math.random() * 6 + 10),
      name: this.name,
      username: this.username,
      email: '',
      role: this.role,
      phone: '',
      website: '',
    });
    this.usersList = this.us.getUsersList();
  }
  selectItem(users: MatListOption[]) {
    this.selectedList = [];
    users.forEach((element) => {
      this.selectedList.push(element.value);
    });
  }

  deleteUsers() {
    this.us.deleteUsers(this.selectedList);
    this.usersList = this.us.getUsersList();
  }
}
