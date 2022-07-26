import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { List, Vacancy } from "../pages/external-vacancies/model/vacancy";




@Injectable({ providedIn: 'root' })
export class VacancyService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {

    }
    //all vacancy
    public getAllVacancies(): Observable<Vacancy[]> {
        return this.http.get<Vacancy[]>(`${this.apiServerUrl}/VacancyAdmin/vacancy/allVacancy`)
    }

    //get vacancy by vacancyId
    public getVacancy(vacancyId) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/vacancy/${vacancyId}`)
    }

    //add vacancy
    public addVacancy(vacancy: any) {

        return this.http.post(`${this.apiServerUrl}/VacancyAdmin/vacancy/add`, vacancy);
    }


    //new, active, cancelled 
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


    //edit vacancy

    public updateVacancy(vacancy: Vacancy, vacancyId: number) {
        return this.http.put(`${this.apiServerUrl}/VacancyAdmin/vacancy/${vacancyId}`, vacancy)
    }
    //cancel
    public cancelVacancy(vacancy: any): Observable<Vacancy[]> {
        return this.http.post<Vacancy[]>(`${this.apiServerUrl}/VacancyAdmin/vacancy/cancelVacancy`, vacancy)
    }
    //duplicate
    public duplicateVacancy(vacancy: any): Observable<Vacancy[]> {
        return this.http.post<Vacancy[]>(`${this.apiServerUrl}/VacancyAdmin/vacancy/duplicateVacancy`, vacancy)
    }
    //active
    public activeVacancy(vacancy: any): Observable<Vacancy[]> {
        return this.http.post<Vacancy[]>(`${this.apiServerUrl}/VacancyAdmin/vacancy/activeVacancy`, vacancy)
    }
    //delete
    public deleteVacancy(vacancy: any): Observable<Vacancy[]> {
        return this.http.post<Vacancy[]>(`${this.apiServerUrl}/VacancyAdmin/vacancy/deleteVacancy`, vacancy)
    }



    // vacancy program in edit


    public getAllPrograms(id: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/vacancy/program?vacancyId=${id}&page=${page}&start=${start}&limit=${limit}`)

    }

    public addNewProgram(vacancyId: number, program: any) {
        return this.http.post(`${this.apiServerUrl}/VacancyAdmin/vacancy/program?vacancyId=${vacancyId}`, program)

    }



}


