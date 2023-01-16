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
    public editApplicant(applicantId: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/${applicantId}?page=${page}&start=${start}&limit=${limit}`)
    }

    //applicant Education
    public applicantEdu(applicantId: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/education?applicantId=${applicantId}&page=${page}&start=${start}&limit=${limit}`)
    }

    //applicant Training
    public applicantTrain(applicantId: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/traning?applicantId=${applicantId}&page=${page}&start=${start}&limit=${limit}`)
    }

    // applicant Experience
    public applicantExperience(applicantId: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/experience?applicantId=${applicantId}&page=${page}&start=${start}&limit=${limit}`)
    }
}