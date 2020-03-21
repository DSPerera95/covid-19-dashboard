import { newE2EPage } from '@stencil/core/testing';

describe('country-italy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<country-italy></country-italy>');

    const element = await page.find('country-italy');
    expect(element).toHaveClass('hydrated');
  });
});
