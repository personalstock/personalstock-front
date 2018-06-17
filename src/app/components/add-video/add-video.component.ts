import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from '../../model/video';
import { AccountService } from '../../services/account.service';
import { Order } from '../../model/order';
import { VideoService } from '../../services/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  orderId: number;
  video: Video;
  videoPreviewUrl: SafeResourceUrl;

  @ViewChild('videoName')
  videoNameRef: ElementRef;

  @ViewChild('videoUrl')
  videoUrlRef: ElementRef;

  @ViewChild('videoDescription')
  videoDescriptionRef: ElementRef;

  videoNameError = false;
  videoUrlError = false;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private videoService: VideoService,
              private router: Router,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.video = new Video();
      this.orderId = params['order'];
    });

    this.videoPreviewUrl = null;
  }

  addVideo() {
    this.videoNameError = false;
    this.videoUrlError = false;

    this.video.name = this.videoNameRef.nativeElement.value;
    this.video.videoUrl = this.videoUrlRef.nativeElement.value;
    this.video.description = this.videoDescriptionRef.nativeElement.value;
    this.video.creator = this.accountService.loggedUser;
    this.video.order = new Order();
    this.video.order.id = this.orderId;

    if (!this.video.name || this.video.name.length === 0) {
      this.videoNameError = true;
      return;
    }
    if (!this.video.videoUrl || this.video.videoUrl.length === 0) {
      this.videoUrlError = true;
      return;
    }

    this.videoService.addVideo(this.video).subscribe();

    this.router.navigate(['/myOrders']);
  }

  previewVideo() {
    let urlToProcess: string = this.videoUrlRef.nativeElement.value;
    urlToProcess = urlToProcess.replace('watch?v=', 'embed/');
    console.log(urlToProcess);
    this.videoPreviewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urlToProcess);
  }

  disableVideoNameError() {
    this.videoNameError = false;
  }

  disableVideoUrlError() {
    this.videoUrlError = false;
  }

}
