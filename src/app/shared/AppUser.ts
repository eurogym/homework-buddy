import firestore from 'firebase/app';

export interface appuser {
  uid: string;
  displayName: any;
  email: string;
  memberingroups: string[];
}
