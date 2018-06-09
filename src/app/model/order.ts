import { Account } from './account';

export class Order {
    id: number;
    name: string;
    location1: string;
    location2: string;
    price: number;
    poster: Account;
}
