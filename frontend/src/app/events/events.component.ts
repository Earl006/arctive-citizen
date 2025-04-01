import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Event {
  id: number;
  title: string;
  date: Date;
  endDate?: Date;
  location: string;
  description: string;
  price: string;
  isPast: boolean;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
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
export class EventsComponent {
  events: Event[] = [
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

  filteredEvents: Event[] = this.events;
  activeFilter: 'all' | 'upcoming' | 'past' = 'all';
  selectedEvent: Event | null = null;

  filterEvents(filter: 'all' | 'upcoming' | 'past'): void {
    this.activeFilter = filter;
    
    if (filter === 'all') {
      this.filteredEvents = this.events;
    } else if (filter === 'upcoming') {
      this.filteredEvents = this.events.filter(event => !event.isPast);
    } else {
      this.filteredEvents = this.events.filter(event => event.isPast);
    }
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
  
  openEventDetails(event: Event): void {
    this.selectedEvent = event;
    document.body.classList.add('overflow-hidden');
  }
  
  closeEventDetails(): void {
    this.selectedEvent = null;
    document.body.classList.remove('overflow-hidden');
  }
}