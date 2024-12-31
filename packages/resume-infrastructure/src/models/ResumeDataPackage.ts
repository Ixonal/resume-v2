import type { Business, Education, PersonalItem, Proficiency, Reference, Subject, WorkHistory } from "./index.js";

export interface ResumeDataPackage {
  businesses?: Business[];
  education?: Education[];
  personalItems?: PersonalItem[];
  proficiencies?: Proficiency[];
  subject?: Subject;
  workHistory?: WorkHistory[];
  references?: Reference[];
}