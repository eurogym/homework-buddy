import firestore from 'firebase/app';
import { GruppeFB } from './gruppe-fb';

export interface Todo {
    id: string;
    group: string;
    groupobj: any;
    subject: string;
    subjectobj: any;
    category: string;
    description: string;
    dueDate: firestore.firestore.Timestamp;
    doneDate?: firestore.firestore.Timestamp;
    doneByUser: string[];

  }
