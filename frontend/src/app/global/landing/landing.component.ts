import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

interface Event {
  id: number;
  title: string;
  date: Date;
  location: string;
  description: string;
  price: string;
  isPast: boolean;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  imports: [CommonModule],
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
    trigger('fadeInModal', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
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
  
  selectedEvent: Event | null = null;

  // Featured events for the landing page
  featuredEvents: Event[] = [
    {
      id: 1,
      title: "Women's Day Gathering",
      date: new Date('2024-03-08T10:30:00'),
      location: "The Creative Nest Studio, Nandi Road 85, Karen",
      description: "We're so excited to see you tomorrow for our Women's Day gathering! 💛\n\n📍 Location: The Creative Nest Studio, Nandi Road 85, Karen\n⏰ Arrival: 10:30 AM (We start right on time—please be punctual!)\n\nLook forward to a relaxing yoga session (mats provided), creative art activities, meaningful conversations, and light snacks. 🧘🏾‍♀️🎨💬🍉 Feel free to bring your own color pencils, crayons, or art supplies if you'd like!\n\nCome as you are, and let's share this beautiful moment together. See you tomorrow!\n\n#IWD",
      price: "Ksh. 1,000",
      isPast: true,
      image: "assets/womens-day-event.jpeg",
      tags: ["Women's Day", "Workshop", "Wellness"]
    }
  ];

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

  // Event handling methods
  openEventDetails(event: Event): void {
    this.selectedEvent = event;
  }

  closeEventDetails(): void {
    this.selectedEvent = null;
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
  
  formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  }
}