import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../../services/map.service';
import * as Locate from 'leaflet_locatecontrol/dist/L.Control.Locate.min';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
	@ViewChild('map') divMap: ElementRef;
	map;
  parcelles;
  sections;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.parcelles = this.mapService.parcelles;
    this.mapService.sections.subscribe(data => {
      let formatedData = data.map((section: any) => {
        const inf = JSON.parse(section.geometry.coordinates).coords
        section.geometry.coordinates = inf['coords'];
        return section;
      })
      this.sections ={
        "type":"FeatureCollection",
        "crs":{"type":"name","properties":{"name":"EPSG:4326"}},
        "features": formatedData
      };
      L.geoJSON(this.sections).addTo(this.map);
    })
  }

  ngAfterViewInit() {
      this.initMap()
  }

  initMap() {
  	const mapContainer = this.divMap.nativeElement;
  	this.map = L.map(mapContainer).setView([-17.344628180999962,14.775183521000031], 13);

  	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  }).addTo(this.map);

    const parcelleLayer = L.geoJSON(this.parcelles, {
      style: function (feature) {
          return {color: '#EE9E0A'};
        }
      }).bindPopup(function (layer) {
          return 'layer.feature.properties.surface';
      });
      this.map.addLayer(parcelleLayer).fitBounds(parcelleLayer.getBounds());

      let sectionLayer= L.geoJSON(this.sections).addTo(this.map);
          console.log(sectionLayer)
          console.log(this.sections)
      
      new Locate({
        locateOptions: {
          enableHighAccuracy: true
      }}).addTo(this.map)
  }

}
