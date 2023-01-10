import { ApplicantsSearchComponent } from "../applicants-search/applicants-search.component";
import { DictionaryItem, Vacancy } from "./vacancy";

export interface Applicant {
    objectId: Number;
    id: number;
    fName: string;
    lName: string;
    customerNumber: string;
    gender: DictionaryItem;
    birthDate: Date;
    birthDateDay: string;
    birthDateMonth: string;
    birthDateYear: string;
    mail: string;
    optionalMail: string;
    phone: string;
    homeNumber: string;
    otherNumber: string;
    regAddressStatus: string;
    country: string;
    city: string;
    address: string;
    status: number;
    connection: DictionaryItem;
    relativity: string;
    relativityName: string;
    relativityPlaceWork: string;
    relativityPosition: string;
    relativityMobile: string;
    workCategory: string;
    workSchedule: DictionaryItem;
    workPlace: string;
    workSalary: string;
    workStart: string;
    wantedPosition: string;
    wantedSalary: string;
    wantedCategory: DictionaryItem;
    wantedType: DictionaryItem;
    vacancyId: number;
    additionalPhone: string;
    citizen: string;
    registrationAddress: string;
    registrationCity: string;
    registrationCountry: string;
    referName: string;
    referPosition: string;
    pageStatus: number;
    linkedInProf: string;




}

export interface VacancyApplicant {
    objectId: number;
    id: number;
    vacancy: Vacancy;
    applicant: Applicant;
    status: number;
    createDate: Date;
    shortList: boolean;
}