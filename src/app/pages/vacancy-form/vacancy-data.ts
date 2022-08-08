export class VacancyData {

    constructor(
        public vacancyName: string,
        public address: string,
        public deadLine: string,
        public schedule: string,
        public category: string,
        public type: string,
        public description: string,
        public experience: string,
        public probationaryPeriod: string,
        public educationLevel: string,
        public education: boolean,
        public educationSphere: string,
        public educationSphereComment: string,
        public salary: string
    ) { }
}
