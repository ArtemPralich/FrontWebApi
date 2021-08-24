import { Component, OnInit, Input } from '@angular/core';
import { StarsRatingService } from 'src/app/service/StarsRatingService';


@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent implements OnInit {
  
  @Input() ObjectId = 0;
  @Input() CountStars = 0;
  constructor(public ratingService: StarsRatingService) {
  }

  ngOnInit(): void {
  }

}
