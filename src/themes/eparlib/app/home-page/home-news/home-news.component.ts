import { Component } from '@angular/core';
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
    
    collectionData.collections().subscribe((data) => {
      console.warn("data", data);
      this.collections = data;
    });
    
  }
}

