import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    imports: [ProductModule],
    controllers: [ProductsController],
    providers: [ProductsService],
})

export class ProductModule
{

}