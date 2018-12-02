export interface Parcelle {
	id_doc_parcel: string;
	id_parcelle: string;
	id_section: string;
	id_docsection: string;
	nicad: string;
	id_user: string;
	id_propritaire: string;
	surf_cal: number;
	surf_bornage: number;
	nature_juridique:string;


	cours: Array<{
		ev_cours: number;
		surf_cours: number;
		surfcorrige_cours: number;
		categ_cours: string;
		val_m2_cours: number;
		valeur_cours: number;

	}>;

	cloture: Array<{
		ev_clot: number;
		long_clot: number;
		longcorrige_clot: number;
		categ_clot: string;
		val_m_clot: number;
		valeur_clot: number;
		
	}>;

	sol: {
		secteur: number;
		val_m2_secteur: number;
		surf_batie: number;
		surf_non_batie: number;
		longcorrige_clot: number;
		val_surf_batie: number;
		val_surf_non_batie: number;
		valeur_sol: number;
	};
amenagmt_parcul: Array<{
		nature: number;
		prix_de_revient: number;
	}>;

	valeur_immeuble: number;
}
