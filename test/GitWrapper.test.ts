
import { GitWrapper } from '../src/GitWrapper';
import { expect } from 'chai';

describe('GitWrapper', () => {

  it('should create an instance', () => {
    const value = new GitWrapper();
    expect(value).instanceOf(GitWrapper);
  });

});
