export interface User {
    id: number;
    recordKey: string;
    role: string;
    internal: boolean;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    contactMobile: string;
    registerDate: string;
    confirmEmailDate: Date;
    activateDate: Date;
    active: boolean;
    lockDate: Date;
    locked: boolean;
    loginDate: Date;
    cancelled: boolean;
    cancelledDate: Date;
    status: number;
    actKey: string;
    external: boolean;



}