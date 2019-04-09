import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpeciesPipe} from './pipes/species.pipe';
import {FractionPipe} from './pipes/fraction.pipe';
import {GenderPipe} from './pipes/gender.pipe';

@NgModule({
  declarations: [HeaderComponent, DropdownComponent, SpeciesPipe, FractionPipe, GenderPipe],
  exports: [HeaderComponent, DropdownComponent, SpeciesPipe, FractionPipe, GenderPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule {

}
