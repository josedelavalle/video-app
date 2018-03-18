import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../../services/video-data.service';
import { AsyncPipe } from '@angular/common';

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
  public searches: Array<string> = [];
  public activeSearch: string = this.searchTerm;
  constructor(private videoDataService: VideoDataService) { }

  ngOnInit() {
    this.videoDataService.getVideoData(this.searchTerm, null).subscribe(res => {
      this.totalItems = res['pageInfo']['totalResults'];
      this.videoData = res['items'];
      this.nextPageToken = res['nextPageToken'];
      this.pushToPastSearches();
      console.log(res);
    });
  }

  searchKeyPress(e) {
    if (e.keyCode == 13) {
      this.clearVideos();
      this.getMoreVideos();
    }
  }
  setSearch(searchString) {
    this.clearVideos();
    this.getMoreVideos(searchString)
  }
  getMoreVideos(s) {
    if (!s) {
      s = this.searchTerm;
      this.pushToPastSearches();
    }
    this.activeSearch = s;
    this.videoDataService.getVideoData(s, this.nextPageToken).subscribe(res => {
      this.totalItems = res['pageInfo']['totalResults'];
      this.nextPageToken = res['nextPageToken'];
      this.videoData = this.videoData.concat(res['items']);
    })
  }

  removePastSearch(e, item) {
    e.stopPropagation();
    this.searches = this.searches.filter(x => x !== item);
  }
  pushToPastSearches() {
    console.log(this.searches.findIndex(x => x == this.searchTerm));
    if (this.searches.findIndex(x => x == this.searchTerm) == -1) {
      this.searches.push(this.searchTerm);
    }
  }

  clearVideos() {
    this.videoData = [];
  }

  trackByFn(index, item) {
    console.log(item);
    return index
  }

}
