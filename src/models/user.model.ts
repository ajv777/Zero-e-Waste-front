export class User {
    name: string;
    surname: string;
    adress: string;
    pc: number;
    localidad: string;
    province: string;
    phone_number: number;
    whatsapp: boolean;
    email: string;
    signup_date: Date;

    constructor(pName: string, pSurname: string, pAdress: string, pPc: number, pLocalidad: string, pProvince: string, pPhone_number: number, pWhatsapp: boolean, pEmail: string, pSignup_date: Date ){
        this.name = pName,
        this.surname = pSurname,
        this.adress = pAdress,
        this.pc = pPc,
        this.localidad = pLocalidad,
        this.province = pProvince,
        this.phone_number = pPhone_number,
        this.whatsapp = pWhatsapp,
        this.email = pEmail,
        this.signup_date = pSignup_date
    }
}