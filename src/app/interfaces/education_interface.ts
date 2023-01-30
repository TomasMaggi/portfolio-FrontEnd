export interface IEducation {
  id: number;
  title: string;
  type: string;
  institution: string;
  description: string;
  date_of_start: Date | null;
  date_of_finish: Date | null;
}
