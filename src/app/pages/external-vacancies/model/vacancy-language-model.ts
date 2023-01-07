
import { Vacancy } from "./vacancy";
import { Program } from "./vacancy-program-model";

export interface DictionaryItem {

    vacancyId: number;
    fixed: boolean;
    key: string;
    name: string;
    nameGE: string;
    sortOrder: number;
    disabled: boolean;
}



export interface errors {
    msg: string;
    warning: boolean;
    critical: boolean;
}

export interface ListLanguage {
    objectId: number;
    id: number;
    vacancyId: number;
    vacancyName: string;
    Language: Array<Language>;
    otherLanguage: any;

}

export interface LanguageVacancy {
    success?: boolean;
    errors?: Array<errors>
    list?: Array<ListLanguage>;
    count?: string;
    vacancies?: string;
    languages?: Language;
    programs?: Program;
    departments?: string;
    educationLevels?: string;
    gender?: string;
    ageFrom?: string;
    ageTo?: string;
    dateFrom?: string;
    dateTo?: string;
    noExperience?: boolean
}
export interface Language {
    vacancyId: number;
    vacancyName: string
}

export interface VacancyLanguage {
    id: number;
    language: DictionaryItem;
    isAdmin: boolean;
    vacancy: Vacancy;
    otherLanguage: string;
}