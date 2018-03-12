import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VideoDataService {
  private resultsPerPage: number = 12;
  private videoDataURL: string = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q={term}&videoLicense=creativecommon&maxResults=' + this.resultsPerPage + '&key=AIzaSyDHNut7B9u3JWnZCYxOlUXaKxcfTd6K13o'
  constructor(private http: HttpClient) { }

  getVideoData(term, token) {
    var url = this.videoDataURL.replace("{term}",term);
    if (token) url += "&pageToken=" + token;
    console.log(url);
    return this.http.get(url);
  }

  getMoreData() {

  }
}
