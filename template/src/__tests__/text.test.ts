import { truncate } from '../utils/text';

describe('text', () => {
  it('truncates string when it exceeds limit', () => {
    const res = truncate('this should be truncated', 20);
    expect(res).toBe('this should be trunc...');
  });
});
