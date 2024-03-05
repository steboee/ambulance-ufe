import { newE2EPage } from '@stencil/core/testing';

describe('xkovalcikc-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkovalcikc-ambulance-wl-editor></xkovalcikc-ambulance-wl-editor>');

    const element = await page.find('xkovalcikc-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
