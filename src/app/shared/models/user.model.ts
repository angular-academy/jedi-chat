export type Species = 'HUMAN' | 'ZABRAK' | 'MIRIALAN' | 'TWILEK' | 'KALEESH';
export type Fraction = 'GALACTIC_EMPIRE' | 'REBEL_ALLIANCE' | 'GALACTIC_REPUBLIC' | 'CONFEDERACY_OF_INDEPENDENT_SYSTEMS';
export type Gender = 'MALE' | 'FEMALE';

export interface User {
  nickName: string;
  avatar: string;
  bio: string;
  gender: Gender;
  species: Species;
  fraction: Fraction;
}

export interface CreateUser extends User {
  password: string;
  matchingPassword: string;
}
