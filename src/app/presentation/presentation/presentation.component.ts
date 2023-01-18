import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Fox} from "../../interfaces/fox.interface";


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {

  foxPicture: Fox = {
    image: '',
    link: ''
  };
  coolCounter = 0;
  uncoolCounter = 0;

  constructor(private service: ApiService) {
    this.getNewFox();
  }

  coolCounterButton() {
    this.coolCounter++;
    this.getNewFox();
  }

  uncoolCounterButton() {
    this.uncoolCounter++;
    this.getNewFox();
  }

  private getNewFox() {
    this.service.getPictures().subscribe(
      foxImage => {
        this.foxPicture = foxImage
      }
    )
  }




}


