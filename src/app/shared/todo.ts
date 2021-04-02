import firestore from 'firebase/app';
import { GruppeFB } from './gruppe-fb';

export interface Todo {
    id: string;
    group: string;
    groupobj: (GruppeFB | undefined);
    subject: string;
    category: string;
    description: string;
    dueDate: firestore.firestore.Timestamp;
    doneDate?: firestore.firestore.Timestamp;
  }
