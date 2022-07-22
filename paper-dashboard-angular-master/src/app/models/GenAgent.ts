import { AdmUser } from "./AdmUser";
import { PayCashDeskSession } from "./PayCashDeskSession";
import { PayCashing } from "./PayCashing";

export class GenAgent{
    age_id:number;
	age_refe:String;
	age_name:String;
	age_login:String;
	age_pwd:String;
	admuser:AdmUser;
	paycashing:PayCashing[];
	paycashdesksession:PayCashDeskSession[];
}