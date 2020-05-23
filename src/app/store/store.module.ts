import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {NgxsSelectSnapshotModule} from '@ngxs-labs/select-snapshot';
import {NgxsDispatchPluginModule} from '@ngxs-labs/dispatch-decorator';
import {DummyState} from './dummy.state';

@NgModule({
  declarations: [],
  providers: [ DummyState],
  imports: [
    CommonModule,
    NgxsModule.forRoot([DummyState], {

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
