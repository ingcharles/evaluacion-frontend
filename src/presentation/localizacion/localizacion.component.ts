import { DropdownModule } from 'primeng/dropdown';
import { Component, OnInit } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.component.html',
  styleUrls: ['./localizacion.component.scss'],
	standalone: true,
	imports: [
    FieldsetModule,
    DropdownModule,
    SelectModule
	],
})
export class LocalizacionComponent implements OnInit {

  constructor() { }
  optionsMenuPadre: any = [];
  ngOnInit() {
  }

}
