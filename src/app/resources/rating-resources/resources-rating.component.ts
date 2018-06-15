import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResourcesService } from '../resources.service';
import { RatingComponent } from '../../rating/rating.component';
import { CouchService } from '../../shared/couchdb.service';
import { PlanetMessageService } from '../../shared/planet-message.service';
import { UserService } from '../../shared/user.service';
import { DialogsFormService } from '../../shared/dialogs/dialogs-form.service';

@Component({
  templateUrl: '../../rating/rating.component.html',
  selector: 'planet-resources-rating'
})
export class ResourcesRatingComponent extends RatingComponent {

  constructor(
    private FB: FormBuilder,
    private CS: CouchService,
    private PM: PlanetMessageService,
    private US: UserService,
    private DF: DialogsFormService,
    private resourcesService: ResourcesService
  ) {
    super(FB, CS, PM, US, DF);
    this.ratingType = 'resource';
  }

  updateService() {
    this.resourcesService.updateResources();
  }

}
