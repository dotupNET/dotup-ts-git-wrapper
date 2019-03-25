import { sync } from 'cross-spawn';

export class GitWrapper {

  execute(...args: string[]): string {
    const result = sync('git', args);
    if (result.stderr.toString().trim() !== '') {
      throw new Error(result.stderr.toString().trim());
    }
    return result.stdout.toString().trim();
  }

  init(): void {
    this.execute('init');
  }

  add(): void {
    this.execute('add', '.');
  }

  commit(message: string): void {
    this.execute(
      'commit',
      '-a',
      `-m ${message}`
    );
  }

  createTag(tag: string, comment: string): void {
    this.execute(
      'tag',
      `-a ${tag}`,
      `-m ${comment}`
    );
  }

  pushTags(): void {
    this.execute(
      'push',
      'origin',
      '--tags'
    );
  }

  addRemote(url: string): void {
    this.execute(
      'remote',
      'add',
      'origin',
      url
    );
  }

  isMaster(): boolean {
    return this.getCurrentBranch() === 'master';
  }

  getCurrentBranch(): string {
    return this.execute('symbolic-ref', '--short', 'HEAD');
  }

  hasChanges(): boolean {
    try {
      const result = this.execute('status', '--porcelain');
      return result !== '';
    } catch (_) {
      return true;
    }
  }

}
