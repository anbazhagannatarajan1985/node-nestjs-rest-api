import { Controller, Get, Put, Post, Param, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('products')
@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {

    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getProducts() {
        return this.productService.getProducts();
    }

    @Post()
    createProduct(product: any) {

    }

    @Put()
    updateProduct(product: any) {

    }

    @Get(':id') 
    getProduct(@Param() params) {
        console.log('get a single product', params.id);
        return this.productService.getProducts().filter(p => p.id == params.id);
    }
}
