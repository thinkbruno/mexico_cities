import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationService } from './services/location.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './app.component.html',

    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    states: any[] = [];
    cities: any[] = [];
    selectedStateId: number | null = null;

    constructor(private locationService: LocationService) { }

    ngOnInit() {
        // Carrega os estados ao iniciar a página
        this.locationService.getStates().subscribe({
            next: (data) => this.states = data,
            error: (err) => console.error('Fail to load states', err)
        });
    }

    onStateChange() {
        if (this.selectedStateId) {
            this.locationService.getCitiesByState(this.selectedStateId).subscribe({
                next: (data) => this.cities = data,
                error: (err) => console.error('Fail to load cities', err)
            });
        } else {
            this.cities = [];
        }
    }
}