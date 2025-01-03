import { LocalizacionUseCase } from './../../domain/localizacion/usesCases/localizacion.usecase';
import { DropdownModule } from 'primeng/dropdown';
import { Component, inject, OnInit } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { SelectModule } from 'primeng/select';
import { ILocalizacion, ILocalizacionRs } from '../../domain/localizacion/interfaces/i-localizacion';
import { LocalizacionService } from '../../data/localizacion.services';
import { messages } from '../../data/base/constants/messages';
import { AlertsService } from '../../data/base/services/alerts.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.component.html',
  styleUrls: ['./localizacion.component.scss'],
  standalone: true,
  imports: [
    FieldsetModule,
    DropdownModule,
    CommonModule,
  ],
})
export class LocalizacionComponent implements OnInit {

  constructor() { }

  optionsProvincia: ILocalizacionRs[] = [];
  optionsCanton: ILocalizacionRs[] = [];
  optionsParroquia: ILocalizacionRs[] = [];
  selectedProvincia: ILocalizacionRs | null = null;
  selectedCanton: ILocalizacionRs | null = null;
  selectedParroquia: ILocalizacionRs | null = null;
  localizacionUseCase: LocalizacionUseCase = inject(LocalizacionUseCase);
  alertsService: AlertsService = inject(AlertsService);

  ngOnInit() {
    this.loadProvincias();
  }

  public loadProvincias(): void {
    this.localizacionUseCase.getAllLocalizacion().then(result => {
      if (result.ok) {
        this.optionsProvincia = result.data!;
      } else {
        this.alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }

  public loadCantones(idProvincia: string): void {
    const localizacion: ILocalizacion = { id: idProvincia };
    this.localizacionUseCase.getCantonByIdProvincia(localizacion).then(result => {
      if (result.ok) {
        this.optionsCanton = result.data!;
      } else {
        this.alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }

  public loadParroquias(idProvincia: string): void {
    const localizacion: ILocalizacion = { id: idProvincia };
    this.localizacionUseCase.getParroquiaByIdCanton(localizacion).then(result => {
      if (result.ok) {
        this.optionsParroquia = result.data!;
      } else {
        this.alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }

  public onChangeProvincia(event: any) {
    this.clearCanton();
    this.clearParroquia();
    this.selectedProvincia = this.getLocalizacionById(this.optionsProvincia, event.value);
    this.loadCantones(event.value);
  }

  public onChangeCanton(event: any) {
    this.clearParroquia();
    this.selectedCanton = this.getLocalizacionById(this.optionsCanton, event.value);
    this.loadParroquias(event.value);
  }

  public onChangeParroquia(event: any) {
    this.selectedParroquia = this.getLocalizacionById(this.optionsParroquia, event.value);
  }

  getLocalizacionById(options: ILocalizacionRs[], id: string) {
    return options.find((provincia) => provincia.id === id) || null;
  }

  clearParroquia() {
    this.optionsParroquia = [];
    this.selectedParroquia = null;
  }

  clearCanton() {
    this.optionsCanton = [];
    this.selectedCanton = null;
  }
}

