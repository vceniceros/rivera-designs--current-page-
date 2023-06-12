import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-principal-slider',
  templateUrl: './principal-slider.component.html',
  styleUrls: ['./principal-slider.component.css'],
})
export class PrincipalSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let items = document.querySelectorAll('.carousel .carousel-item');

    items.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.childNodes[0]);
        next = next.nextElementSibling;
      }
    });
  }
}
