import { GenAccount } from "./GenAccount";
import{GenDebt} from "./GenDebt"
export class Party{
    par_id:number;
	par_refe:String;
	par_refe_rxt:String;
	par_name:String;
	address:String;
	genaccounts:GenAccount[];
	gendebt:GenDebt[];
}