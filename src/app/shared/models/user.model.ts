type Species = 'HUMAN' | 'ZABRAK' | 'MIRIALAN' | 'TWILEK';
type Fraction = 'GALACTIC_EMPIRE' | 'REBEL_ALLIANCE' | 'GALACTIC_REPUBLIC' | 'CONFEDERACY_OF_INDEPENDENT_SYSTEMS';
type Gender = 'MALE' | 'FEMALE';

export interface User {
  nickname: string;
  avatar: string;
  bio: string;
  gender: Gender;
  species: Species;
  fraction: Fraction;
}
