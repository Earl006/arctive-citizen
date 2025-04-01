import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AboutComponent {
  // Sample data for demonstration
  impactMetrics = [
    { number: '355+', label: 'Citizens Directly Engaged' },
    { number: '11.2K', label: 'Citizens Indirectly Reached' },
    { number: '1.2K', label: 'Page Views' },
    { number: '3.2K', label: 'Unique Visitors' }
  ];

  partners = [
    { 
      name: 'UNOPS', 
      logo: 'assets/unops-logo.png' 
    },
    { 
      name: 'Slum Soccer, Mathare', 
      logo: 'assets/slum-soccer-logo.jpg' 
    },
    { 
      name: 'Color My World', 
      logo: 'assets/color-my-world-logo.png' 
    },
    { 
      name: 'Pioneer University', 
      logo: 'assets/pioneer-university-logo.png' 
    },
    { 
      name: 'Ghetto Radio', 
      logo: 'assets/GR-3.webp' 
    },
    { 
      name: 'Peace by Peace Initiative, Netherlands', 
      logo: 'assets/pax.png' 
    }
  ];

  values = [
    {
      title: 'Participation with Humility',
      description: 'We approach community engagement with respect and openness, recognizing the wisdom and expertise that exists in every community.'
    },
    {
      title: 'Local Ownership',
      description: 'We believe sustainable change comes from within communities, with citizens taking ownership of both challenges and solutions.'
    },
    {
      title: 'Continuous Feedback Loops',
      description: 'We constantly listen, learn, and adapt our approaches based on community input and evolving needs.'
    }
  ];
}
