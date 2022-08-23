import { GenAgent } from "./GenAgent";
import { GenBank } from "./GenBank";

export class PayCashing{
    csh_id:number;
	csh_rejet_id:number;
	csh_date:Date;
	sli_id:number;
	csh_amount:number;
	cur_id:number;
	csh_bankdocument:String;
	csh_bank:String;
	vow_rejmotif:String;
	genbank:GenBank;
	genagent:GenAgent;
}