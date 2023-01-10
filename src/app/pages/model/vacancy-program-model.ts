import { Vacancy } from "./vacancy";

export interface DictionaryItem {

    id: number;
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

export interface ListProgram {
    objectId: number;
    id: number;
    vacancyId: number;
    vacancyName: string;
    program: Array<Program>;
    otherProgram: any;

}

export interface ProgramVacancy {
    success?: boolean;
    errors?: Array<errors>
    list?: Array<ListProgram>;
    count?: string;
    vacancies?: string;
    languages?: string;
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
export interface Program {
    vacancyId: number;
    vacancyName: string
}

export interface VacancyProgram {
    id: number;
    program: DictionaryItem;
    isAdmin: boolean;
    vacancy: Vacancy;
    otherProgram: string;
}