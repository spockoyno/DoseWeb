import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {NgxsSelectSnapshotModule} from '@ngxs-labs/select-snapshot';
import {NgxsDispatchPluginModule} from '@ngxs-labs/dispatch-decorator';
import {EtaState} from './eta.state';

@NgModule({
  declarations: [],
  providers: [ EtaState],
  imports: [
    CommonModule,
    NgxsModule.forRoot([EtaState], {

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
