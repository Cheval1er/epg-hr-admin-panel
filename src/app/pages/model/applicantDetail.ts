import { DictionaryItem, Vacancy } from './vacancy';
import { Applicant } from './applicant'


export interface ApplicantEducation {
    id: number;
    applicantId: number;
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