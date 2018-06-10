import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from '../../model/video';
import { AccountService } from '../../services/account.service';
import { Order } from '../../model/order';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  orderId: number;
  video: Video;

  @ViewChild('videoName')
  videoNameRef: ElementRef;

  @ViewChild('videoUrl')
  videoUrlRef: ElementRef;

  @ViewChild('videoDescription')
  videoDescriptionRef: ElementRef;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private videoService: VideoService,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.video = new Video();
      this.orderId = params['order'];
    });
  }

  addVideo() {
    this.video.name = this.videoNameRef.nativeElement.value;
    this.video.videoUrl = this.videoUrlRef.nativeElement.value;
    this.video.description = this.videoDescriptionRef.nativeElement.value;

    this.video.creator = this.accountService.loggedUser;
    this.video.order = new Order();
    this.video.order.id = this.orderId;

    this.videoService.addVideo(this.video).subscribe();

    this.router.navigate(['/myOrders']);
  }

}
