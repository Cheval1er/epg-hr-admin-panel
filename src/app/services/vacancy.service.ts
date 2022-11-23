import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { List, Vacancy } from "../pages/external-vacancies/vacancy";



@Injectable({ providedIn: 'root' })
export class VacancyService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {

    }

    public getAllVacancies(): Observable<Vacancy[]> {
        return this.http.get<Vacancy[]>(`${this.apiServerUrl}/VacancyAdmin/vacancy/allVacancy`)
    }
    public getVacancy(id) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/vacancy/${id}`)
    }


    public addVacancy(vacancy: any) {

        return this.http.post(`${this.apiServerUrl}/VacancyAdmin/vacancy/add`, vacancy);
    }



    public getAllNewVacancies(start: number, limit: number): Observable<List['status']> {
        return this.http.get<List['status']>(`${this.apiServerUrl}/VacancyAdmin/vacancy/vacancyNew?start=${start}&limit=${limit}`)
    }

    public getAllActiveVacancies(start: number, limit: number): Observable<List['status']> {
        return this.http.get<List['status']>(`${this.apiServerUrl}/VacancyAdmin/vacancy/vacancyActive?start=${start}&limit=${limit}`)
    }

    public getAllCancelledVacancies(start: number, limit: number): Observable<List['status']> {
        return this.http.get<List['status']>(`${this.apiServerUrl}/VacancyAdmin/vacancy/vacancyCancelled?start=${start}&limit=${limit}`)
    }


    public getAllCompletedVacancies(start: number, limit: number): Observable<List['status']> {
        return this.http.get<List['status']>(`${this.apiServerUrl}/VacancyAdmin/vacancy/vacancyComplated?start=${start}&limit=${limit}`)
    }

    public getAllStoppedVacancies(start: number, limit: number): Observable<List['status']> {
        return this.http.get<List['status']>(`${this.apiServerUrl}/VacancyAdmin/vacancy/vacancyStopped?start=${start}&limit=${limit}`)
    }



    public updateVacancy(vacancy: Vacancy, id: number) {
        return this.http.put(`${this.apiServerUrl}/VacancyAdmin/vacancy/${id}`, vacancy)
    }
}