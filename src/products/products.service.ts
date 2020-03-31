import { Injectable, NotFoundException } from "@nestjs/common";

import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Product } from './product.model'

@Injectable()

export class ProductsService
{
    //List of products
    private products: Product[] = [];

    constructor(@InjectModel('Product')  private readonly productModel: Model<Product>,
    ) {}

    async insertProduct(title: string, desc: string, price: number)
    {
        const newProduct = new this.productModel({
            title, 
            description: desc, 
            price
        });
        const result = await newProduct.save();
        console.log(result);
        return 'prodId';
    }

    getProducts(){
        return [...this.products];
    }

    getSingleProduct(productId: string)
    {
        const product = this.findProduct(productId)[0];
        return {...product};
    }

    updateProduct(productId: string, title: string, desc: string, price: number)
    {
        const [product, index] = this.findProduct(productId);
        const updatedProduct = {...product};

        if(title)
        {
            updatedProduct.title = title;
        }
        if(desc)
        {
            updatedProduct.desc = desc;
        }
        if(price)
        {
            updatedProduct.price = price;
        }
            
        this.products[index] = updatedProduct;
    }

    deleteProduct(prodId: string)
    {
        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1);

    }

    private findProduct(id: string): [Product, number]
    {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if(!product)
        {
            throw new NotFoundException('Could not find product');
        }

        return [product, productIndex];
    }
}