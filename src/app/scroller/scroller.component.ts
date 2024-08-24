import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent {
  sections = [
    'hero-section',
    'profile-section',
    'experience-section',
    'projects-section',
    'involvements-section',
  ];
  currentSection = this.sections[0];

  ngOnInit(): void {
    console.log('ScrollIndicatorComponent initialized');
  }

  ngAfterViewInit(): void {
    console.log('ScrollIndicatorComponent view initialized');
  }

  @HostListener('document:scroll', ['$event'])
  onScroll(event: Event): void {
    console.log('Scroll event detected:', event);
    this.updateCurrentSection();
  }

  updateCurrentSection(): void {
    let current = this.sections[0]; // Default to the first section

    for (let i = 0; i < this.sections.length; i++) {
      const sectionElement = document.getElementById(this.sections[i]);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
          current = this.sections[i];
        }
      }
    }

    this.currentSection = current;
    console.log(this.currentSection); // Check which section is currently active
  }

  scrollToSection(section: string): void {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });

      // Update the current section immediately after the scroll
      this.currentSection = section;
    }
  }
}
