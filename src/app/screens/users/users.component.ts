import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users?: Array<User> = [];
  newUser: User = {};
  user: User = {};
  updateUser: User = { firstName: '', city: '', id: 0 };

  constructor(private usersService: UsersService) {}

  async ngOnInit() {
    try {
      this.users = await this.usersService.getAllUsers();
      console.log(this.users);
    } catch (err) {
      console.log(err);
    }
  }

  getUserData(user: User) {
    this.updateUser = {
      firstName: user.firstName,
      city: user.city,
      id: user.id,
    };
    console.log(this.updateUser);
  }

  async getOneUser(userId?: number) {
    try {
      this.user = await this.usersService.getOneUser(userId);
      // console.log(this.users);
      alert(this.user);
    } catch (err) {
      console.log(err);
    }
  }

  async addUser() {
    try {
      // console.log(this.newUser);
      let userLocal: User = Object.assign({}, this.newUser);
      // console.log(userLocal);

      await this.usersService.addUser(userLocal);
      this.users = await this.usersService.getAllUsers();
      this.newUser = {};
    } catch (err) {
      console.log(err);
    }
  }

  async updateUserFunc() {
    try {
      let userLocal: User = Object.assign({}, this.updateUser);
      await this.usersService.updateUser(userLocal);
      this.users = await this.usersService.getAllUsers();
      this.updateUser = {};
    } catch (err) {
      console.log(err);
    }
  }

  async deleteUser(userId?: number) {
    try {
      await this.usersService.deleteUser(userId);
      // console.log(this.users);
      this.users = await this.usersService.getAllUsers();
    } catch (err) {
      console.log(err);
    }
  }
}
