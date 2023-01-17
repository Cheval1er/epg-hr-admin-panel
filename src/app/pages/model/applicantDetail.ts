import { DictionaryItem, Vacancy } from './vacancy';
import { Applicant } from './applicant'


export interface ApplicantEducation {
    id: number;

    applicant: Applicant;
    university: DictionaryItem;
    profession: string;
    sphere: DictionaryItem;
    quality: DictionaryItem;
    learningFrom: string;
    learningTo: string;
    learningNow: boolean;
    otherUniversity: string;
    vacancy: Vacancy

}

export interface ApplicantTraining {
    id: number;
    applicant: Applicant;
    training: string;
    trainingCompany: string;
    trainingPeriodFrom: string;
    trainingPeriodTo: string;
    trainingNow: boolean;
    description: string;
    trainingPlace: string;

}

export interface ApplicantExperience {
    id: number;
    applicant: Applicant;
    company: string;
    position: string;
    place: string;
    category: DictionaryItem;
    periodFrom: string;
    periodTo: string;
    periodNow: string;
    reason: string;
    workDesc: string;
    salary: string;
}

export interface ApplicantLanguage {
    id: number;
    applicant: Applicant;
    language: DictionaryItem;
    otherLanguage: string
}

export interface ApplicantProgram {
    id: number;
    applicant: Applicant;
    program: DictionaryItem;
    otherProgram: string;
}

export interface ApplicantSkill {
    id: number;
    applicant: Applicant;
    skill: DictionaryItem;
    otherSkill: string;
}

export interface ApplicantDepartment {
    id: number;
    applicant: Applicant;
    department: DictionaryItem;
    vacancy: Vacancy;
    otherDepartment: string;
}

export interface ApplicantFile {
    id: number;
    applicant: Applicant;
    fileName: string;
    fileKey: string;
    attachedFile: Blob;
    fileDate: Date;
    fileDescription: string;
    mimetype: string;
    attachSize: number;
    fileUser: string;
    fileData: Blob;
    fileFormat: string;

}
