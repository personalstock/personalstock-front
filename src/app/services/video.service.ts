import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from '../model/video';

const VIDEO_API_URL = 'http://localhost:8080/api/videos';

const HTTP_HEADERS_API = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient: HttpClient) { }

  addVideo(video: Video): Observable<Video> {
    return this.httpClient.post<Video>(VIDEO_API_URL, video, HTTP_HEADERS_API);
  }

}
