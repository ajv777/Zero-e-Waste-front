export class Item{
    idItem: number;
    Name: string;
    Description: string;
    Register_date: Date;
    Pic_1: string;
    Pic_2: string;
    Pic_3: string;
    Precio: number;
    Post_delivery: boolean;
    Hand_delivery: boolean;
    Category: string;
  static Id: string;

    constructor (pdItem: number, pName: string, pDescription: string, pRegister_date: Date, pPic_1: string, pPic_2: string, pPic_3: string, pPrecio: number, pPost_delivery: boolean, pHand_delivery: boolean, pCategory: string) {
        this.idItem = pdItem;
        this.Name = pName;
        this.Description = pDescription;
        this.Register_date = pRegister_date;
        this.Pic_1 = pPic_1;
        this.Pic_2 = pPic_2;
        this.Pic_3 = pPic_3;
        this.Precio = pPrecio;
        this.Post_delivery = pPost_delivery;
        this.Hand_delivery = pHand_delivery;
        this.Category = pCategory;
    }
}

