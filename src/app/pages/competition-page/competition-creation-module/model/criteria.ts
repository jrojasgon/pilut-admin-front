// export const AGE_RANGE = [
//   {id: 1, value: '> 25 < 35'},
//   {id: 2, value: '> 18 < 25'},
//   {id: 3, value: '> 35 < 45'},
//   {id: 4, value: '> 45'},
// ];

// export const DEBT_AGE = [
//   {id: 1, value: 'Al dia'},
//   {id: 2, value: 'Mora 30'},
//   {id: 3, value: 'Mora 60'},
//   {id: 4, value: 'Mora 180'},
//   {id: 5, value: 'Mora 360'},
//   {id: 6, value: 'Mora > 360'},
// ];

export class Criteria {
  id: string;
  name: string;
}

export class City extends Criteria {
  residentialZones: string[];
}

export class DebtAge extends Criteria {
}

export class DebtRange extends Criteria {
}

export class AgeRange extends Criteria {
}
