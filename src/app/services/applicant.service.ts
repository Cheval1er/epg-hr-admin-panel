import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Applicant } from "../pages/model/applicant";
import { ApplicantFile } from "../pages/model/applicantDetail";




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
    public searchApplicants(vacancyId: number, languageId: number, genderId: number, programsIds: number, departmentsIds: number, educationLevelsId: number, ageFrom: number, ageTo: number, noexperience: number, dateFrom: Date, dateTo: Date, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/search?vacancyIds=${vacancyId}&languagesIds=${languageId}&programsIds=${programsIds}&departmentsIds=${departmentsIds}&educationLevelsIds=${educationLevelsId}&genderId=${genderId}&ageFrom=${ageFrom}&ageTo=${ageTo}&noExperience=${noexperience}&dateFrom=${dateFrom}&dateTo=${dateTo}&page=${page}&start=${start}&limit=${limit}`)
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

    // applicant Language
    public applicantLanguage(applicantId: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/language?applicantId=${applicantId}&page=${page}&start=${start}&limit=${limit}`)
    }
    // applicant Program
    public applicantProgram(applicantId: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/program?applicantId=${applicantId}&page=${page}&start=${start}&limit=${limit}`)
    }

    // applicant Skill
    public applicantSkill(applicantId: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/skill?applicantId=${applicantId}&page=${page}&start=${start}&limit=${limit}`)
    }

    // applicant Department
    public applicantDepartment(applicantId: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/department?applicantId=${applicantId}&page=${page}&start=${start}&limit=${limit}`)
    }

    // applicant file
    public applicantFile(applicantId: number, page: number, start: number, limit: number): Observable<ApplicantFile[]> {
        return this.http.get<ApplicantFile[]>(`${this.apiServerUrl}/VacancyAdmin/applicant/file?applicantId=${applicantId}&page=${page}&start=${start}&limit=${limit}`)

    }
    log(arg0: string): void {
        throw new Error("Method not implemented.");
    }
    handleError<T>(arg0: string, arg1: undefined[]): (err: any, caught: Observable<Object>) => import("rxjs").ObservableInput<any> {
        throw new Error("Method not implemented.");
    }

    // applicants Vacancies

    public applicantsVacancies(applicantId: number, page: number, start: number, limit: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/applicant/vacancy?applicantId=${applicantId}&page=${page}&start=${start}&limit=${limit}`)
    }

    public applicantsReportLink(objectId: number) {
        return this.http.get(`${this.apiServerUrl}/VacancyAdmin/report/vacancy/applicantsReportLink?objectId=${objectId}`)
    }
}