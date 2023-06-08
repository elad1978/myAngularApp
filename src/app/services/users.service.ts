import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public andPoint: string =
    'https://647ef2f0c246f166da8fbbd0.mockapi.io/mockGuitarList';

  async getAllUsers(): Promise<any> {
    return this.http.get(this.andPoint).toPromise();
  }
  async getOneUser(id?: number): Promise<any> {
    return this.http.get(this.andPoint + '/' + id).toPromise();
  }

  async addUser(user?: User): Promise<any> {
    return this.http.post(this.andPoint, user).toPromise();
  }

  async updateUser(user: User): Promise<any> {
    return this.http.put(this.andPoint + '/' + user.id, user).toPromise();
  }

  async deleteUser(id?: number): Promise<any> {
    return this.http.delete(this.andPoint + '/' + id).toPromise();
  }
}
