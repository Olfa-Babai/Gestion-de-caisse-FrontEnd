import {AdmUser} from './AdmUser'
import {AdmProfile} from './AdmProfile'
import { PayCashDeskSession } from './PayCashDeskSession';

export class AdmUserProfile {
    usp_id:number;
	usp_granted:String;
	usp_startdt:Date;
	usp_enddt:Date;
	usp_credit:number;
	paycashdesksessions:PayCashDeskSession[];
	user_aff:AdmUser;
	profile_aff:AdmProfile;	
}