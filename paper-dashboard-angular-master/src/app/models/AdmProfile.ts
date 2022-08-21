import {Profile} from './Profile'
import { AdmUserProfile } from "./AdmUserProfile";

export class AdmProfile{
    id:number;
    pru_label:String;
	name:Profile;
	user_profile_aff:AdmUserProfile[];
}