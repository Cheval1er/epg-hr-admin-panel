import { Vacancy } from "./vacancy";
import { Program } from "./vacancy-program-model";

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

export interface ListSkill {
    objectId: number;
    id: number;
    vacancyId: number;
    vacancyName: string;
    skill: Array<Skill>;
    otherSkill: any;

}

export interface SkillVacancy {
    success?: boolean;
    errors?: Array<errors>
    list?: Array<ListSkill>;
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
export interface Skill {
    vacancyId: number;
    vacancyName: string
}

export interface VacancySkill {
    id: number;
    skill: DictionaryItem;
    isAdmin: boolean;
    vacancy: Vacancy;
    otherSkill: string;
}