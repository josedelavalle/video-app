import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../../services/video-data.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  public pageNum: number = 1;
  public totalItems: number = 0;
  public videoData: Array<any> = [];
  public pageInfo: {};
  public item: {};
  private nextPageToken: string = null;
  public searchTerm: string = 'knicks';
  constructor(private videoDataService: VideoDataService) { }

  ngOnInit() {
    this.videoDataService.getVideoData(this.searchTerm, null).subscribe(res => {
      this.totalItems = res['pageInfo']['totalResults'];
      this.videoData = res['items'];
      this.nextPageToken = res['nextPageToken'];
      console.log(res);
    });
  }

  getMoreVideos() {
    this.videoDataService.getVideoData(this.searchTerm, this.nextPageToken).subscribe(res => {
      this.nextPageToken = res['nextPageToken'];
      this.videoData = this.videoData.concat(res['items']);
    })
  }

  trackByFn(index, item) {
    console.log(item);
    return index
  }

}
