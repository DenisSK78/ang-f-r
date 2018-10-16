import {Phone} from '../phone/phone.model';
import {Email} from '../email/email.model';

export class Person {
  id: number;
  name: string;
  address: string;
  comment: string;
  phones: Phone [];
  emails: Email [];
}
