export interface DropdownValue {
  value: string;
  viewValue: string;
}

export const GenderDropdownOptions: DropdownValue[] = [
  {value: 'FEMALE', viewValue: 'Female'},
  {value: 'MALE', viewValue: 'Male'}
];

export const SpeciesDropdownOptions: DropdownValue[] = [
  {value: 'HUMAN', viewValue: 'Human'},
  {value: 'ZABRAK', viewValue: 'Zabrak'},
  {value: 'MIRIALAN', viewValue: 'Mirilian'},
  {value: 'TWILEK', viewValue: 'Twi\'Lek'},
  {value: 'KALEESH', viewValue: 'Kaleesh'}
];

export const FractionDropdownOptions: DropdownValue[] = [
  {value: 'GALACTIC_EMPIRE', viewValue: 'Galactic Empire'},
  {value: 'REBEL_ALLIANCE', viewValue: 'Rebel Alliance'},
  {value: 'GALACTIC_REPUBLIC', viewValue: 'Galactic Republic'},
  {value: 'CONFEDERACY_OF_INDEPENDENT_SYSTEMS', viewValue: 'Confederacy of Independent Systems'}
];
