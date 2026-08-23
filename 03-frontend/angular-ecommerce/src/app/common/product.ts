export class Product {
    constructor(

        public id: number,
        public sku: string,
        public name: string,
        public description: string,
        public unit_price: number,
        public imageUrl: string,
        public active: boolean,
        public UnitsInStock: number,
        public dateCreated: Date,
        public lastUpdated: Date
    )
    {}
     

}
