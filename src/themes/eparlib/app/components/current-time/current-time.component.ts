import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'ds-current-time',
  standalone: true,
  imports: [],
  templateUrl: './current-time.component.html',
  styleUrl: './current-time.component.scss'
})

export class CurrentTimeComponent implements OnInit {

  currentTime: string;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
      this.cdRef.detectChanges(); // Manually trigger change detection
    }, 1000);  // Update every second
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }
}
