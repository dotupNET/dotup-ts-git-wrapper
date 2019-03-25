import { IBranch } from './IBranch';
import { IRemote } from './IRemote';
import { ICore } from './ICore';
export class GitConfigContent {
  branch: IBranch[] = [];
  // tslint:disable-next-line: no-object-literal-type-assertion
  core: ICore = <ICore>{};
  remote: IRemote[] = [];
}
