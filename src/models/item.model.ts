export class Item{
    name: string;
    description: string;
    register_date: Date;
    pic_1: string;
    pic_2: string;
    pic_3: string;
    precio: number;
    post_delivery: boolean;
    hand_delivery: boolean;
    category: string;

    constructor (pName: string, pDescription: string, pRegister_date: Date, pPic_1: string, pPic_2: string, pPic_3: string, pPrecio: number, pPost_delivery: boolean, pHand_delivery: boolean, pCategory: string) {
        this.name = pName;
        this.description = pDescription;
        this.register_date = pRegister_date;
        this.pic_1 = pPic_1;
        this.pic_2 = pPic_2;
        this.pic_3 = pPic_3;
        this.precio = pPrecio;
        this.post_delivery = pPost_delivery;
        this.hand_delivery = pHand_delivery;
        this.category = pCategory;
    }
}

