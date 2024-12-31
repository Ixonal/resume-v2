import { getDatabase, ref, get, onValue } from "firebase/database";
import { Observable, BehaviorSubject, combineLatestWith, map, filter } from "rxjs";

import { Business, Education, PersonalItem, Proficiency, Reference, Subject, WorkHistory } from "../models/index.js";
import { FirebaseApp, initializeApp } from "firebase/app";

interface Type<T> {
  new(...props: any[]): T;
}

export interface IData {
  businesses: Business[];
  education: Education[];
  personalItems: PersonalItem[];
  proficiencies: Proficiency[];
  references: Reference[];
  subject: Subject;
  workHistory: WorkHistory[];
}

//todo: make this cache in localStorage for loss of connectivity issues
export class DataRepository {
  private _firebaseApp?: FirebaseApp;

  public constructor(apiKey: string, senderId: string) {
    this._firebaseApp = initializeApp({
      apiKey, 
      authDomain: "bens-resume.firebaseapp.com",
      databaseURL: "https://bens-resume.firebaseio.com",
      storageBucket: "bens-resume.appspot.com",
      messagingSenderId: senderId
    });
  }

  private snapshot(path: string): Promise<any> {
    if(!path) throw new Error("path is required");
    if(path.charAt(0) !== "/") path = "/" + path;
    return get(ref(getDatabase(this._firebaseApp), path)).then(snapshot => snapshot.val());
  }

  private _streamCache = {};

  private stream<T>(path: string, type: Type<T>): Observable<any> {
    if(!path) throw new Error("path is required");
    if(path.charAt(0) !== "/") path = "/" + path;
    if(this._streamCache[path]) return this._streamCache[path];

    let subject = new BehaviorSubject<any>(null);
    this._streamCache[path] = subject;
    onValue(ref(getDatabase(this._firebaseApp), path), snapshot => {
      let val = snapshot.val();
      if(Array.isArray(val)) {
        subject.next((<any[]>val).map(item => new type(item)));
      } else {
        subject.next(new type(val))
      }
    });
    
    return subject.asObservable();
  }

  public async getBusinesses(): Promise<Business[]> {
    return this.snapshot("businesses").then((businesses: any[]) => businesses.map(business => new Business(business)));
  }

  public async getEducation(): Promise<Education[]> {
    return this.snapshot("education").then((education: any[]) => education.map(edu => new Education(edu)));
  }

  public async getPersonalItems(): Promise<PersonalItem[]> {
    return this.snapshot("personalItems").then((personalItems: any[]) => personalItems.map(personalItem => new PersonalItem(personalItem)));
  }

  public async getProficiencies(): Promise<Proficiency[]> {
    return this.snapshot("proficiencies").then((proficiencies: any[]) => proficiencies.map(proficiency => new Proficiency(proficiency)));
  }

  public async getReferences(): Promise<Reference[]> {
    return this.snapshot("references").then((references: any[]) => references.map(reference => new Reference(reference)));
  }

  public async getSubject(): Promise<Subject> {
    return this.snapshot("subject").then(snapshot => new Subject(snapshot));
  }

  public async getWorkHistory(): Promise<WorkHistory[]> {
    return this.snapshot("workHistory").then((workHistory: any[]) => workHistory.map(h => new WorkHistory(h)));
  }

  public getBusinessStream(): Observable<Business[]> {
    return this.stream("businesses", Business);
  }

  public getEducationStream(): Observable<Education[]> {
    return this.stream("education", Education);
  }

  public getPersonalItemsStream(): Observable<PersonalItem[]> {
    return this.stream("personalItems", PersonalItem);
  }

  public getProficienciesStream(): Observable<Proficiency[]> {
    return this.stream("proficiencies", Proficiency);
  }

  public getReferencesStream(): Observable<Reference[]> {
    return this.stream("references", Reference);
  }

  public getSubjectStream(): Observable<Subject> {
    return this.stream("subject", Subject);
  }

  public getWorkHistoryStream(): Observable<WorkHistory[]> {
    return this.stream("workHistory", WorkHistory);
  }

  public getDataStream(): Observable<IData> {
    //using combineLatest to merge all the separate streams into one
    const fullStream = this.getBusinessStream().pipe(
      combineLatestWith(
        this.getEducationStream(),
        this.getPersonalItemsStream(),
        this.getProficienciesStream(),
        this.getReferencesStream(),
        this.getSubjectStream(),
        this.getWorkHistoryStream()
      )
    ).pipe(map(([businesses, education, personalItems, proficiencies, references, subject, workHistory]) => {
      return {
        businesses,
        education,
        personalItems,
        proficiencies,
        references,
        subject,
        workHistory
      } as IData;
    }));

    const filteredStream = fullStream.pipe(filter(data => 
      !!data.businesses && 
      !!data.education && 
      !!data.personalItems && 
      !!data.proficiencies && 
      !!data.references && 
      !!data.subject && 
      !!data.workHistory
    ));

    return filteredStream;

  }
}
