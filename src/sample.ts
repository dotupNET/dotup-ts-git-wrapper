import { GitWrapper } from './GitWrapper';

export class Sample {

  async run(): Promise<void> {
    const git = new GitWrapper();
    let r = '';
    r = git.getCurrentBranch();
    git.add();
    const x = git.hasChanges();
    git.addRemote('https://github.com/dotupNET/dotup-ts-git-wrapper.git');
    git.init();
  }

  runSomethingElse(): void {
    console.log('Here we are again!');
  }

}

const sample = new Sample();
sample.run();
