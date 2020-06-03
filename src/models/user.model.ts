export class User {
    nickname: string
    password: string
    email: string
    name: string
    surname: string
    address: string
    phoneNumber: number

    constructor(nickname: string, password: string, email: string, name: string, surname: string, address: string, phoneNumber: number){
        this.nickname =  nickname
        this.password = password
        this.email = email
        this.name = name
        this.surname = surname
        this.address = address
        this.phoneNumber = phoneNumber
    }
}