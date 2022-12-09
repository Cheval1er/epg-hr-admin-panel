



export class ListProgram {
    objectId: number;
    id: number;
    vacancyId: number;
    vacancyName: string;
    programId: number;
    programName: string;
    otherProgram: string;

}

export interface errors {
    msg: string;
    warning: boolean;
    critical: boolean;
}
export interface VacancyProgramModel {
    success: boolean;
    errors: errors[];
    list: ListProgram[];
    count: number;
    vacancies?: any;
    languages?: any;
    programs?: any;
    departments?: any;
    educationlevels?: any;
    gender?: any;
    ageFrom?: any;
    ageTo?: any;
    dateFrom?: any;
    dateTo?: any;
    noExperience?: any;
}
