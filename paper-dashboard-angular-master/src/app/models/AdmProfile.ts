import {Role} from './Role'
import { AdmUserProfile } from "./AdmUserProfile";

export class AdmProfile{
    pru_id:number;
    pru_label:String;
	pru_status:String; // nullable
	pru_role:Role;
	pru_natusp:String; // nullable
	user_profile_aff:AdmUserProfile[];
}