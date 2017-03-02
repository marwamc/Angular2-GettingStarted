
export interface IDoccService{
        serviceId: number;
        serviceName: string;
        serviceCode: string;
        releaseDate: string;
        description: string;
        price: number;
        starRating: number;
        imageUrl: string;
}

export class DoccService implements IDoccService{

    constructor(
        public serviceId: number,
        public serviceName: string,
        public serviceCode: string,
        public releaseDate: string,
        public description: string,
        public price: number,
        public starRating: number,
        public imageUrl: string
    ){    }

    calculateDiscount(percent:number) : number {
        return this.price - (this.price * percent/100);
    }

}