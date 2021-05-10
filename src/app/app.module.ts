import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmptyCardComponent } from './empty-card/empty-card.component';
import { FiltersPanelComponent } from './filters-panel/filters-panel.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { SortingPanelComponent } from './sorting-panel/sorting-panel.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketPanelComponent } from './ticket-panel/ticket-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmptyCardComponent,
    FiltersPanelComponent,
    MainPanelComponent,
    PreloaderComponent,
    SortingPanelComponent,
    TicketComponent,
    TicketPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
