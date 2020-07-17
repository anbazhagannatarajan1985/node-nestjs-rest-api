import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    getProducts() {
        return [{
            id: 1,
            name: 'A SPA app'
        },
        {
            id: 2,
            name: 'A Nest API'
        }]
    }

}
