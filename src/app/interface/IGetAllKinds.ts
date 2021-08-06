import { IKind } from "./IKind";

export interface IGetAllKinds{
    countPage: number;
    currentPage: number;
    kindsDto: IKind[];
}