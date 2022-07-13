import {Role} from './Role'

export class AdmProfile{
    _id:number;
    pru_label:String;
	pru_status:String; // nullable
	pru_role:Role;
	pru_natusp:String; // nullable
}