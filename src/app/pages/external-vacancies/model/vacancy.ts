
export interface DictionaryItem {

    vacancyId: number;
    fixed: boolean;
    key: string;
    name: string;
    nameGE: string;
    sortOrder: number;
    disabled: boolean;
}

export class List {
    createDate: Date;
    createUser: string;
    modifyDate: Date;
    modifyUser: string;
    removeDate: Date;
    removeUser: string;
    vacancyId: number;
    vacancyName: string;
    vacancyAddress: string;
    vacancyDate?: Date;
    deadLine: string;
    category: DictionaryItem;
    type: DictionaryItem;
    description: string;
    title: string;
    schedule: string;
    age: string;
    gender: DictionaryItem;
    experience: string;
    experienceSphere: DictionaryItem;
    educationLevel: DictionaryItem;
    language?: DictionaryItem;
    languageLevel?: any;

    skill?: any;
    probationaryPeriod: string;
    salary: string;
    vacancyOut?: boolean;
    status: string;
    otherEducationLevel?: any;
    otherEducationSphere: string;
}

export interface errors {
    msg: string;
    warning: boolean;
    critical: boolean;
}
export interface Vacancy {
    success?: boolean;
    errors?: Array<errors>
    list?: Array<List>;
    count?: string;
    vacancies?: string;
    languages?: string;
    programs?: any;
    departments?: string;
    educationLevels?: string;
    gender?: string;
    ageFrom?: string;
    ageTo?: string;
    dateFrom?: string;
    dateTo?: string;
    noExperience?: boolean
}



