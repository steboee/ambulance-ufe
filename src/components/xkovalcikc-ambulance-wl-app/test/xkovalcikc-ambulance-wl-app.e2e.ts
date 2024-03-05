import { newE2EPage } from '@stencil/core/testing';

describe('xkovalcikc-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkovalcikc-ambulance-wl-app></xkovalcikc-ambulance-wl-app>');

    const element = await page.find('xkovalcikc-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
