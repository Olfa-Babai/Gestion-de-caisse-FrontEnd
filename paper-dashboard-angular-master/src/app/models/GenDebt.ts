import { GenAccount } from "./GenAccount";
import { GenOrg } from "./GenOrg";
import { Party } from "./Party";
import { PayCashDebt } from "./PayCashDebt";

export class GenDebt{
    deb_id:number;
	deb_refe:String;
	adresse:String;
	deb_date:Date;
    deb_duedt:Date;
	deb_printdt:Date;
	deb_amountinit:number;
	vow_debtype_libelle:String;
	deb_remb:number;
	run_name:String;
	red_name:String;
	genorg:GenOrg;
	party:Party;
	genaccount:GenAccount;
	paycashdebt:PayCashDebt;
}