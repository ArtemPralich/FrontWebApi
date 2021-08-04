import { IProduct } from "./IProduct";

export interface IGetAllProduct{
    countPage: number;
    currentPage: number;
    productsDto: IProduct[];
}