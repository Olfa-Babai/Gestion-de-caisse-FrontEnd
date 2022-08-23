import { GenDebt } from "./GenDebt";
import { PayCashDeskMove } from "./PayCashDeskMove";

export class PayCashDebt{
    pcd_id:number;
	pcd_date:Date;
	pcd_amount:number;
	paycashdeskmove:PayCashDeskMove;
	gendebt:GenDebt;
}