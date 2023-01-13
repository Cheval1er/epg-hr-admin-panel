import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Applicant } from "../pages/model/applicant";




@Injectable({ providedIn: 'root' })
export class ApplicantService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {

    }

    //all applicants
    public getAllApplicants(page: number, start: number, limit: number): Observable<Applicant[]> {
        return this.http.get<Applicant[]>(`${this.apiServerUrl}/VacancyAdmin/applicant/search?page=${page}&start=${start}&limit=${limit}`)
    }

    //search applicants
    public searchApplicants(vacancyId: number, languageId: number, genderId: number, programsIds: number, departmentsIds: number, educationLevelsId: number, ageFrom: number, ageTo: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/search?vacancyIds=${vacancyId}&languageId=${languageId}&programsIds=${programsIds}&departmentsIds=${departmentsIds}&educationLevelsIds=${educationLevelsId}&genderId=${genderId}&ageFrom=${ageFrom}&ageTo=${ageTo}&page=${page}&start=${start}&limit=${limit}`)
    }


    // edit Applicants
    public editApplicant(objectId: number, editApplicant: any) {
        return this.http.put(`${this.apiServerUrl}/VacancyAdmin/applicant/vacancy/${objectId}`, editApplicant)
    }
}