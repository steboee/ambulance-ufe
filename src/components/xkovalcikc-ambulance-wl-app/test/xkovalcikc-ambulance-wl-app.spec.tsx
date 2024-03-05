import { newSpecPage } from '@stencil/core/testing';
import { XkovalcikcAmbulanceWlApp } from '../xkovalcikc-ambulance-wl-app';

describe('xkovalcikc-ambulance-wl-app', () => {
    it('renders editor', async () => {
        const page = await newSpecPage({
            url: `http://localhost/entry/@new`,
            components: [XkovalcikcAmbulanceWlApp],
            html: `<xkovalcikc-ambulance-wl-app base-path="/"></xkovalcikc-ambulance-wl-app>`,
        });
        page.win.navigation = new EventTarget();
        const child = await page.root.shadowRoot.firstElementChild;
        expect(child.tagName.toLocaleLowerCase()).toEqual('xkovalcikc-ambulance-wl-editor');
    });

    it('renders list', async () => {
        const page = await newSpecPage({
            url: `http://localhost/ambulance-wl/`,
            components: [XkovalcikcAmbulanceWlApp],
            html: `<xkovalcikc-ambulance-wl-app base-path="/ambulance-wl/"></xkovalcikc-ambulance-wl-app>`,
        });
        page.win.navigation = new EventTarget();
        const child = await page.root.shadowRoot.firstElementChild;
        expect(child.tagName.toLocaleLowerCase()).toEqual('xkovalcikc-ambulance-wl-list');
    });
});
