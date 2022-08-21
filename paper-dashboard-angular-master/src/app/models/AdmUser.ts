import { GenAgent } from "./GenAgent";
import { AdmUserProfile } from "./AdmUserProfile";

export class AdmUser{
    use_id:number;
	use_matricule:String; // cin ou passeport
	username:String;
	password:String;
	lname:String;
	fname:String;
	use_nbessai:String;
	use_cptestatus:String;// nullable
	use_crtdt:Date;
	use_lastcnx:Date;
	use_nmadm:String; // nullable
	use_type:String; // nullable
	use_status:String; // nullable
	genagent:GenAgent;
	user_profile_aff:AdmUserProfile[];
}