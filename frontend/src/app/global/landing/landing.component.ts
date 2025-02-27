import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ transform: 'translateX(20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class LandingComponent implements OnInit { 
  activeMembers = 0;
  digitalTools = 0;
  communityInitiatives = 0;

  targetActiveMembers = 100;
  targetDigitalTools = 5;
  targetCommunityInitiatives = 10;

  ngOnInit(): void {
    this.animateCount('activeMembers', this.targetActiveMembers, 2000);
    this.animateCount('digitalTools', this.targetDigitalTools, 2000);
    this.animateCount('communityInitiatives', this.targetCommunityInitiatives, 2000);
  }

  animateCount(prop: 'activeMembers' | 'digitalTools' | 'communityInitiatives', target: number, duration: number) {
    const steps = 30;
    let currentStep = 0;
    const increment = target / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      currentStep++;
      this[prop] = Math.round(increment * currentStep);
      if (currentStep >= steps) {
        this[prop] = target;
        clearInterval(timer);
      }
    }, interval);
  }
}