import { Account } from './account';
import { Order } from './order';

export class Video {
    id: number;
    name: string;
    videoUrl: string;
    description: string;
    creator: Account;
    order: Order;
}
