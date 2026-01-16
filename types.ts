export enum WordStatus {
  ACCEPTED = 'Accepted',
  REJECTED = 'Rejected',
  MODIFIED = 'Modified Meaning',
  UNCERTAIN = 'Uncertain'
}

export enum Author {
  BEN_YEHUDA = 'אליעזר בן-יהודה',
  BIALIK = 'חיים נחמן ביאליק'
}

export enum Weight {
  MIFALA = 'מִפְעָלָה',
  UT = 'וּת (Suffix)',
  IT = 'ִית (Suffix)',
  MAFEL = 'מַפְעֵל/מַפְעֶלֶת',
  PAAL = 'פָּעַל/פְּעָלָה',
  MISHKAL_AHER = 'Other / General'
}

export interface WordEntry {
  id: string;
  word: string;
  definition: string;
  translation: string; 
  etymology?: string;
  status: WordStatus;
  weight: Weight | string;
  notes?: string;
  author: Author;
}

export interface StatPoint {
  name: string;
  value: number;
  description?: string;
}