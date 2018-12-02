export interface Batiment {
id_doc_bati: string;
id_doc_parcel: string;
id_doc_occup:string;
id_doc_prop:string;
num_bati:string;
nbre_niveau:number;
surf_balcon:number;
surf_batie:number;
surf_horsO: number;
surf_util: number;
ev_bati:number;
age_bati:number;
abbat_ancient:number;
coeff_correct: number;
surf_corrig:number;
categ_bati: string;
prix_m2_bati: number;
val_bati: number;
local: Array<{
		id_doc_occup:string;
		id_doc_prop:string;
		type: string;
		loyer: number;
	}>;



}
