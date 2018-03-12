import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() item: any;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  sanitizeUrl(id) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/' + id + "?autoplay=1");
  }
}
