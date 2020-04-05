import {AgeRange, City, DebtAge, DebtRange} from '../../competition-creation-module/model/criteria';
import {User} from '../../../../shared/model/user';

export class Competition {
  id: string;
  name: string;
  debtAge: DebtAge;
  debtRange: DebtRange;
  ageRange: AgeRange;
  city: City;
  residentialZone: string;
  commCanal: string;
  comment: string;
  message: string;
  user: User;
  status: string;
  creationDate: Date;

  constructor(name: string,
              debtAge: DebtAge,
              debtRange: DebtRange,
              ageRange: AgeRange,
              city: City,
              residentialZone: string,
              commCanal: string,
              comment: string,
              message: string,
              user: User,
              creationDate: Date
  ) {
    this.name = name;
    this.ageRange = ageRange;
    this.debtAge = debtAge;
    this.city = city;
    this.residentialZone = residentialZone;
    this.commCanal = commCanal;
    this.comment = comment;
    this.message = message;
    this.debtRange = debtRange;
    this.user = user;
    this.creationDate = creationDate;
  }
}


