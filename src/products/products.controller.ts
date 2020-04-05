import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')

export class ProductsController 
{
    constructor(private readonly productService: ProductsService){}


    @Post()
    async addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodePrice: number,
    ) {
        const generatedId = await this.productService.insertProduct
        (
            prodTitle, 
            prodDesc, 
            prodePrice
        );
        return {id: generatedId};
    }

    @Get()
    async getAllProducts()
    {
        const product = await this.productService.getProducts();
        return product;
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string)
    {
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(':id')
    async updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('desciption') prodDesc: string,
        @Body('price') prodPrice:number,
    ){
        await this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

    @Delete(':id')
    async removeProduct(@Param('id') prodId: string)
    {
        await this.productService.deleteProduct(prodId);
        return 'Deleted';
    }
}