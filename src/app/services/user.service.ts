import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../pages/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  //get Users
  public getUser(page: number, start: number, limit: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/VacancyAdmin/user/search?page=${page}&start=${start}&limit=${limit}`)
  }
  //search users
  public searchUsers(userName: string, personName: string, page: number, start: number, limit: number) {
    return this.http.get(`${this.apiServerUrl}/VacancyAdmin/user/search?userName=${userName}&personName=${personName}&page=${page}&start=${start}&limit=${limit}`)
  }

  //cancel
  public cancelUser(user: any): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiServerUrl}/VacancyAdmin/user/cancelUser`, user)
  }
  //active
  public activeUser(user: any): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiServerUrl}/VacancyAdmin/user/activeUser`, user)
  }

  //lock
  public lockUser(user: any): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiServerUrl}/VacancyAdmin/user/lockUser`, user)
  }
  public unLockUser(user: any): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiServerUrl}/VacancyAdmin/user/unLockUser`, user)
  }


  //user applicant

  public userApplicant(id: number, page: number, start: number, limit: number) {
    return this.http.get(`${this.apiServerUrl}/VacancyAdmin/user/applicants?id=${id}&page=${page}&start=${start}&limit=${limit}`)
  }
}

