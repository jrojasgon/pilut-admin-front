export class User {

  firstName: string;
  lastName: string;
  sex: string;
  mail: string;
  password: string;
  token: string;

  constructor(firstName: string = '', lastName: string = '', sex: string = '', mail: string = '', password: string = '') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
    this.mail = mail;
    this.password = password;
  }
}
