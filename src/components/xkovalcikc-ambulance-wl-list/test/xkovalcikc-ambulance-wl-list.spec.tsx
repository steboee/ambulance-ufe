import { newSpecPage } from '@stencil/core/testing';
import { XkovalcikcAmbulanceWlList } from '../xkovalcikc-ambulance-wl-list';

describe('xkovalcikc-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkovalcikcAmbulanceWlList],
      html: `<xkovalcikc-ambulance-wl-list></xkovalcikc-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as XkovalcikcAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
