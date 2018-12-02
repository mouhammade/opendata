import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Section } from '../../../models/section';
@Component({
  selector: 'app-ajout-section',
  templateUrl: './ajout-section.component.html',
  styleUrls: ['./ajout-section.component.scss']
})
export class AjoutSectionComponent implements OnInit {
	ajoutSectionForm: FormGroup;
	message;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm(){
  	this.ajoutSectionForm = this.fb.group({
		syscol:  ['', Validators.maxLength(8)],
		num_section: ['', Validators.maxLength(3)],
		id_section: ['', Validators.maxLength(11)],
  	});
  }

  enregistrer(){
  	const data: Section = {
  		nom_commune: 'Fatick',
  		id_doc_section: '',
		num_section: this.ajoutSectionForm.get('num_section').value,
		id_section: this.ajoutSectionForm.get('id_section').value,
		syscol: this.ajoutSectionForm.get('syscol').value,
		poids_fisc: 0,
		nbre_parcel: 0,
		nbre_parcel_eval: 0,
		nbre_parcel_non_eval: 0
  	}

  	console.log(data);
  }

}
