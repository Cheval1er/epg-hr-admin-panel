
export interface DictionaryItem {

    id: number;
    fixed: boolean;
    key: string;
    name: string;
    nameGE: string;
    sortOrder: number;
    disabled: boolean;
}

export interface List {
    createDate: Date;
    createUser: string;
    modifyDate: Date;
    modifyUser: string;
    removeDate: Date;
    removeUser: string;
    id: number;
    vacancyName: string;
    vacancyAddress: string;
    vacancyDate?: Date;
    deadLine: Date;
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
    language?: any;
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
    programs?: string;
    departments?: string;
    educationLevels?: string;
    gender?: string;
    ageFrom?: string;
    ageTo?: string;
    dateFrom?: string;
    dateTo?: string;
    noExperience?: boolean
}