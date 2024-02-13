import { newSpecPage } from '@stencil/core/testing';
import { XkovalcikcAmbulanceWlList } from '../xkovalcikc-ambulance-wl-list';

describe('xkovalcikc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkovalcikcAmbulanceWlList],
      html: `<xkovalcikc-ambulance-wl-list></xkovalcikc-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xkovalcikc-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xkovalcikc-ambulance-wl-list>
    `);
  });
});
