import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatButtonModule, MatInputModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatDividerModule, MatSliderModule, MatProgressBarModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [MatGridListModule, MatButtonModule, MatInputModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatDividerModule, MatSliderModule, MatProgressBarModule, MatSnackBarModule],
  exports: [MatGridListModule, MatButtonModule, MatInputModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatDividerModule, MatSliderModule, MatProgressBarModule, MatSnackBarModule],
})
export class MaterialModule { }