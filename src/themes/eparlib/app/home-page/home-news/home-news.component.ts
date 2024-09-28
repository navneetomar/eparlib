import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollectionsDataService } from '../../services/collections-data.service';

import { HomeNewsComponent as BaseComponent } from '../../../../../app/home-page/home-news/home-news.component';

@Component({
  selector: 'ds-themed-home-news',
  styleUrls: ['./home-news.component.scss'],
  templateUrl: './home-news.component.html',
  standalone: true,
})

/**
 * Component to render the news section on the home page
 */
export class HomeNewsComponent extends BaseComponent {
  collections: any;
  constructor(private collectionData: CollectionsDataService) {
    super();
    this.collections = [
      { id: '1', name: 'Collection 1' },
      { id: '2', name: 'Collection 2' },
      { id: '3', name: 'Collection 3' }
    ];
    // collectionData.collections().subscribe((data) => {
    //   console.warn("data", data);
    //   //let arr = 
    //   //this.collections = data;
    //   this.collections = [
    //     { id: '1', name: 'Collection 1' },
    //     { id: '2', name: 'Collection 2' },
    //     { id: '3', name: 'Collection 3' }
    //   ];
    // });
    
  }
}

