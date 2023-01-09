import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { List, Vacancy } from "../pages/external-vacancies/model/vacancy";
import { Applicant, VacancyApplicant } from "../pages/external-vacancies/model/vacancy-applicant-model";
import { LanguageVacancy } from "../pages/external-vacancies/model/vacancy-language-model";
import { ProgramVacancy } from "../pages/external-vacancies/model/vacancy-program-model";
import { VacancyShortListApplicant } from "../pages/external-vacancies/model/vacancy-shortList-model";
import { SkillVacancy } from "../pages/external-vacancies/model/vacancy-skill-model";





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


    public getAllPrograms(vacancyId: number, page: number, start: number, limit: number): Observable<ProgramVacancy[]> {
        return this.http.get<ProgramVacancy[]>(`${this.apiServerUrl}/VacancyAdmin/vacancy/program?vacancyId=${vacancyId}&page=${page}&start=${start}&limit=${limit}`)
    }
    //add
    public addNewProgram(programId: number, program: ProgramVacancy['list']): Observable<ProgramVacancy['list']> {
        return this.http.post<ProgramVacancy['list']>(`${this.apiServerUrl}/VacancyAdmin/vacancy/program?vacancyId=${programId}`, program)
    }
    //delete
    public deleteProgram(program: ProgramVacancy, objectId: number, vacancyId: number) {
        return this.http.put(`${this.apiServerUrl}/VacancyAdmin/vacancy/program/${objectId}?vacancyId=${vacancyId}`, program)
    }

    //edit
    public updateProgram(objectId: number, vacancyId: number, program: ProgramVacancy) {
        return this.http.put(`${this.apiServerUrl}/VacancyAdmin/vacancy/program/${objectId}?vacancyId=${vacancyId}`, program)
    }


    // vacancy language in edit

    public getAllLanguages(vacancyId: number, page: number, start: number, limit: number): Observable<LanguageVacancy[]> {
        return this.http.get<LanguageVacancy[]>(`${this.apiServerUrl}/VacancyAdmin/vacancy/laguage?vacancyId=${vacancyId}&page=${page}&start=${start}&limit=${limit}`)
    }

    //add
    public addNewLanguage(languageId: number, language: LanguageVacancy['list']): Observable<LanguageVacancy['list']> {
        return this.http.post<LanguageVacancy['list']>(`${this.apiServerUrl}/VacancyAdmin/vacancy/laguage?vacancyId=${languageId}`, language)
    }

    //edit
    public updateLanguage(objectId: number, vacancyId: number, language: LanguageVacancy) {
        return this.http.put(`${this.apiServerUrl}/VacancyAdmin/vacancy/laguage/${objectId}?vacancyId=${vacancyId}`, language)
    }
    //delete
    public deleteLanguage(language: LanguageVacancy, objectId: number, vacancyId: number) {
        return this.http.put(`${this.apiServerUrl}/VacancyAdmin/vacancy/laguage/${objectId}?vacancyId=${vacancyId}`, language)
    }


    //vacancy skill in edit

    public getAllSkills(vacancyId: number, page: number, start: number, limit: number): Observable<SkillVacancy[]> {
        return this.http.get<SkillVacancy[]>(`${this.apiServerUrl}/VacancyAdmin/vacancy/skill?vacancyId=${vacancyId}&page=${page}&start=${start}&limit=${limit}`)
    }
    //add
    public addNewSkill(vacancyId: number, skill: any) {
        return this.http.post(`${this.apiServerUrl}/VacancyAdmin/vacancy/skill?vacancyId=${vacancyId}`, skill)
    }
    //delete
    public deleteSkill(skill: SkillVacancy, objectId: number, vacancyId: number) {
        return this.http.put(`${this.apiServerUrl}/VacancyAdmin/vacancy/skill/${objectId}?vacancyId=${vacancyId}`, skill)
    }

    //edit
    public updateSkill(objectId: number, vacancyId: number, skill: SkillVacancy) {
        return this.http.put(`${this.apiServerUrl}/VacancyAdmin/vacancy/skill/${objectId}?vacancyId=${vacancyId}`, skill)
    }



    // vacancy applicant

    public getAllApplicants(vacancyId: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/vacancy/applicants?vacancyId=${vacancyId}&page=${page}&start=${start}&limit=${limit}`)
    }


    //active short list

    public moveToShortList(applicant: any) {
        return this.http.post(`${this.apiServerUrl}/VacancyAdmin/applicant/createShortList`, applicant)
    }

    public removeFromShortList(applicant: any) {
        return this.http.post(`${this.apiServerUrl}/VacancyAdmin/applicant/removeFromShortList`, applicant)
    }

    // vacancy applicant shortList

    public getAllShortListApplicants(vacancyId: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/vacancy/shortListApplicants?vacancyId=${vacancyId}&page=${page}&start=${start}&limit=${limit}`)
    }
}