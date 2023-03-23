import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BlankComponent } from './components/blank/blank.component';
import { UnderlineDirective } from './directives/underline.directive';
import { DavkaComponent } from './components/davka/davka.component';
import { ImageTooltipDirective } from './directives/image-tooltip.directive';
import { MouseFollowDirective } from './directives/mouse-follow.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BlankComponent,
    UnderlineDirective,
    DavkaComponent,
    ImageTooltipDirective,
    MouseFollowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
