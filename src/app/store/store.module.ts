import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {NgxsSelectSnapshotModule} from '@ngxs-labs/select-snapshot';
import {NgxsDispatchPluginModule} from '@ngxs-labs/dispatch-decorator';
import {AppState} from './state/app.state';
import {AppConfig} from '../../environments/environment';

@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: AppConfig.production,
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false,
      },
    }),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),

  ],
  exports: [NgxsModule, NgxsSelectSnapshotModule],
})
export class StoreModule {}
