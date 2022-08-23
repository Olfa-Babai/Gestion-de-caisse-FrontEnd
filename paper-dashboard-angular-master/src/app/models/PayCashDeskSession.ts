import { AdmUserProfile } from "./AdmUserProfile";
import { GenAgent } from "./GenAgent";
import { PayCashDesk } from "./PayCashDesk";
import { PayCashDeskMove } from "./PayCashDeskMove";

export class PayCashDeskSession{
    css_id:number;
	css_enddt:Date;
	css_startdt:Date;
	paycashdeskmove:PayCashDeskMove;
	paycashdesk:PayCashDesk;
	genagent:GenAgent;
	userprofile:AdmUserProfile;
}
