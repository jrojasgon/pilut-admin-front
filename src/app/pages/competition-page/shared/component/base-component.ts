import {Inject} from '@angular/core';
import {CompetitionService} from '../services/competition.service';
import {FormBuilder} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

export class BaseComponent {

  @Inject(CompetitionService) public competitionService: CompetitionService;
  @Inject(FormBuilder) public formBuilder: FormBuilder;
  @Inject(ToastrService) public toast: ToastrService;
}
