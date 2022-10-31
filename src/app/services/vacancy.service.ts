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


    public addVacancy(vacancy: any) {

        return this.http.post(`${this.apiServerUrl}/VacancyAdmin/vacancy/add`, vacancy);
    }



    public getAllNewVacancies(start: number, limit: number): Observable<void> {
        return this.http.get<void>(`${this.apiServerUrl}/VacancyAdmin/vacancy/vacancyNew?start=${start}&limit=${limit}`)
    }
}