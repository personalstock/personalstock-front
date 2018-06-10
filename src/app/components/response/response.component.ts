import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../model/video';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit, AfterViewInit {

  orderId: number;
  videos: Video[];

  constructor(private videoService: VideoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.orderId = params['order']);
  }

  ngAfterViewInit() {
    this.getOrderVideos();
  }

  getOrderVideos() {
    this.videoService.getVideoByOrder(this.orderId).subscribe(returnedVideos => this.videos = returnedVideos);
  }

}
