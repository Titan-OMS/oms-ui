import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var H: any;
declare var harp: any;

@Component({
  selector: 'app-outage-map',
  templateUrl: './outage-map.component.html',
  styleUrls: ['./outage-map.component.scss']
})
export class OutageMapComponent implements OnInit, AfterViewInit {

  title = 'here-project';
  private platform: any;

  @ViewChild('map', {static: false})
  mapElement!: ElementRef;

  public constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const map = new harp.MapView({
      canvas: document.getElementById('map'),
      tilt: 2,
      theme: 'https://unpkg.com/@here/harp-map-theme@latest/resources/berlin_tilezen_night_reduced.json',
    });
    map.setCameraGeolocationAndZoom(new harp.GeoCoordinates(25.775112431526267, -80.1999449371806), 16.391);
    const mapControls = new harp.MapControls(map);
    const omvDataSource = new harp.OmvDataSource({
      baseUrl: 'https://xyz.api.here.com/tiles/herebase.02',
      apiFormat: harp.APIFormat.XYZOMV,
      styleSetName: 'tilezen',
      authenticationCode: 'AO0b7ZzTTv-jOF5L51e1LgA',
    });
    map.addDataSource(omvDataSource);
  }

}
