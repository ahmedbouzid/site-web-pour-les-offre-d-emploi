import { Component } from '@angular/core';
import { brandSet, cilListNumbered, cilPaperPlane, cilZoom } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  constructor(
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cilListNumbered, cilPaperPlane,cilZoom, ...brandSet };
  }
}
