import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Competition} from '../../shared/model/competition';
import {CompetitionService} from '../../shared/services/competition.service';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CompetitionDetailComponent} from '../competition-detail/competition-detail.component';
import {CompetitionIndicatorsComponent} from '../competition-indicators/competition-indicators.component';

@Component({
  selector: 'app-competition-list-detail',
  templateUrl: './competition-list-detail.component.html',
  styleUrls: ['./competition-list-detail.component.scss']
})
export class CompetitionListDetailComponent implements OnInit {

  @Input()
  competitions = Array<Competition>();

  @Output() updateCompetitions = new EventEmitter<string>();

  constructor(private competitionService: CompetitionService, private toast: ToastrService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  launchCompetition(competition: Competition) {
    competition.status = 'IN_PROGRESS';
    this.updateCompetition(competition);
  }

  pauseCompetition(competition: Competition) {
    competition.status = 'ON_HOLD';
    this.updateCompetition(competition);
  }

  cancelCompetition(competition: Competition) {
    competition.status = 'CANCELED';
    this.updateCompetition(competition);
  }

  updateCompetition(competition: Competition) {
    this.competitionService.updateCompetitionStatus(competition).subscribe(data => {
      if (data === null) {
        this.toast.error('Un error se produjo, intentelo de nuevo', '');
      } else {
        this.updateCompetitionsInParent();
      }
    });
  }

  updateCompetitionsInParent() {
    this.updateCompetitions.emit('eventDesc');
  }

  showResults(event, competition: Competition) {
    event.preventDefault();
    const modalRef = this.modalService.open(CompetitionIndicatorsComponent);
    modalRef.componentInstance.competition = competition;
    modalRef.result.then((result) => {

    }).catch((error) => {
      console.log(error);
    });
  }

  showDetails(event, competition: Competition) {
    event.preventDefault();
    const modalRef = this.modalService.open(CompetitionDetailComponent);
    modalRef.componentInstance.competition = competition;
    event.preventDefault();
    modalRef.result.then((result) => {
      modalRef.componentInstance.competition = competition;
    }).catch((error) => {
      console.log(error);
    });
  }
}
