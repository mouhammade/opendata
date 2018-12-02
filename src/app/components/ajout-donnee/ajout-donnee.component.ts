import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-donnee',
  templateUrl: './ajout-donnee.component.html',
  styleUrls: ['./ajout-donnee.component.scss']
})
export class AjoutDonneeComponent implements OnInit {
	formType: any[] = [
		{
			type: 'parcelle',
			label: 'Parcelle'
		},
		{
			type: 'section',
			label: 'Section'
		},
		{
			type: 'propritaire',
			label: 'Propriétaire'
		},
	]
  constructor() { }

  ngOnInit() {
  }

}
