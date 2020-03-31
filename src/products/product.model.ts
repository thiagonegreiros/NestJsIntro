//Importando todas as classes do mongoose
import * as mongoose from 'mongoose';

//Criando um Schema
export const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},

});

export interface Product
{
    id: string;
    title:string; 
    desc: string; 
    price: number;    
}