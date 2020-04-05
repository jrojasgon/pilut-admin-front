import {Injectable} from '@angular/core';
import {HttpService} from '../../../../shared/services/http/http.service';
import {Competition} from '../model/competition';
import {Router} from '@angular/router';
import {formatDate} from '@angular/common';

import {CompetitionDateSearch} from '../../competition-list-module/model/competition-list-model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private httpService: HttpService, private router: Router) {
  }

  getAllCompetitionCriteria() {
    return this.httpService.getRequestWithAut('getCompetitionCriteria');
  }

  createCompetition(competition: Competition) {
    return this.httpService.postRequestWithBody('createCompetition', competition);
  }

  getCompetitionsByStatusAndDate(competitionListSearch: CompetitionDateSearch) {
    return this.httpService.postRequestWithBody('getCompetitionsByStatus', competitionListSearch);
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  updateCompetitionStatus(competition: Competition) {
    return this.httpService.postRequestWithBody('updateCompetitionStatus', competition);
  }
}
