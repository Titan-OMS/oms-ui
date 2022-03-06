import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var H: any;

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
    this.platform = new H.service.Platform({
      apikey: 'wBD7RRv092a1x8PzxBdTwAMQPfxwICztKNOi2w10peY'
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const defaultLayers = this.platform.createDefaultLayers();
    const map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: 37.7397, lng: -121.4252 }
      }
    );
    console.log('*******THIS MAP*****', this, map, defaultLayers);
  }

}
