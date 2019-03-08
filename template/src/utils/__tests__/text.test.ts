import { truncate } from '../text';

describe('text', () => {
  it('truncates string when it exceeds length', () => {
    expect(truncate('this should be truncated', 20)).toBe(
      'this should be trunc...',
    );
  });

  it('does not truncate string when it does not exceed length', () => {
    expect(truncate('not truncated', 20)).toBe('not truncated');
  });
});
