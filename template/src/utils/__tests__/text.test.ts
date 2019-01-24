import { truncate } from '../text';

describe('text', () => {
  it('truncates string when it exceeds limit', () => {
    expect(truncate('this should be truncated', 20)).toBe(
      'this should be trunc...',
    );
  });

  it('does not truncate string when it does not exceed limit', () => {
    expect(truncate('not truncated', 20)).toBe('not truncated');
  });
});
