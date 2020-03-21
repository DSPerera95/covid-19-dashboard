import { newE2EPage } from '@stencil/core/testing';

describe('country-srilanka', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<country-srilanka></country-srilanka>');

    const element = await page.find('country-srilanka');
    expect(element).toHaveClass('hydrated');
  });
});
