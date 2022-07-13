export class AdmUser{
    _id:number;
	use_matricule:String; // cin ou passeport
	use_login:String;
	use_psw:String;
	use_lname:String;
	use_fname:String;
	use_nbessai:String;
	use_cptestatus:String;// nullable
	use_crtdt:Date;
	use_lastcnx:Date;
	use_nmadm:String; // nullable
	use_type:String; // nullable
	use_status:String; // nullable
}