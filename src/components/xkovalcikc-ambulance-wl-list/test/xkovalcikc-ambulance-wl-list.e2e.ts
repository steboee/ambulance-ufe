import { newE2EPage } from '@stencil/core/testing';

describe('xkovalcikc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkovalcikc-ambulance-wl-list></xkovalcikc-ambulance-wl-list>');

    const element = await page.find('xkovalcikc-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
