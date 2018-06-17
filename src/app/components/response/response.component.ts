import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../model/video';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  orderId: number;
  videos = new Array<Video>();
  videoSanitizedUrls = new Map<number, SafeResourceUrl>();

  constructor(private videoService: VideoService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.orderId = params['order']);
    this.getOrderVideos();
  }

  getOrderVideos() {
    this.videoService.getVideoByOrder(this.orderId).subscribe(returnedVideos => {
      this.videos = returnedVideos;
      for (const v of returnedVideos) {
       this.sanitizeVideoUrl(v);
      }
    });
  }

  sanitizeVideoUrl(video: Video) {
    const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video.videoUrl);
    this.videoSanitizedUrls.set(video.id, sanitizedUrl);
  }

}
