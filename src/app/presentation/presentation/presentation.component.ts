import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Fox} from "../../interfaces/fox.interface";


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements AfterViewInit{

  foxPicture: Fox = {
    image: '',
    link: ''
  };
  coolCounter = 0;
  uncoolCounter = 0;
  coolButton!: HTMLButtonElement;
  uncoolButton!: HTMLButtonElement;
  id!: any;

  constructor(private service: ApiService) {
    this.getNewFox();
  }

  coolCounterButton(e: Event) {
    this.coolCounter++;
    this.getNewFox();
    this.coolButton.disabled = true;
    this.uncoolButton.disabled = true;
    // @ts-ignore
    this.id = e.target.id
    document.body.style.cursor='wait';
  }

  uncoolCounterButton(e: Event) {
    this.uncoolCounter++;
    this.getNewFox();
    this.uncoolButton.disabled = true;
    this.coolButton.disabled = true;
    // @ts-ignore
    this.id = e.target.id;
    document.body.style.cursor='wait';
  }

  private getNewFox() {
    this.service.getPictures().subscribe(
      foxImage => {
        this.foxPicture = foxImage
      }
    )
  }

  checkImageButton() {
    this.id === 'cool-button' ? this.checkImageLoadedCoolButton() : this.checkImageLoadedUncoolButton();
  }

  checkImageLoadedCoolButton() {
    this.coolButton.disabled = false
    this.uncoolButton.disabled = false;
    document.body.style.cursor='default';
  }

  checkImageLoadedUncoolButton() {
    this.uncoolButton.disabled = false
    this.coolButton.disabled = false;
    document.body.style.cursor='default';
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    this.coolButton = document.getElementById('cool-button');
    // @ts-ignore
    this.uncoolButton = document.getElementById('uncool-button');
  }
}


