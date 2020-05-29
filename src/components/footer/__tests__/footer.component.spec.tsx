import React from 'react';
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FooterComponent from "../footer.component";
import Link from "next/link";

configure({ adapter: new Adapter() });

describe("Footer Component", () => {
    it('renders the clickable Vercel Logo', () => {
        const footerRender = shallow(<FooterComponent />);

        expect(
            footerRender
                .find('a[data-testid="footer-a"]')
                .prop('target')
        ).toEqual('_blank');

        expect(
            footerRender
                .find('a[data-testid="footer-a"]')
                .prop('rel')
        ).toEqual('noopener noreferrer');

        expect(
            footerRender
                .find('a[data-testid="footer-a"]')
                .prop('href')
        ).toEqual('https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app');

        expect(
            footerRender.find('a[data-testid="footer-a"]').text()
        ).toContain("Powered by");

        expect(
            footerRender
                .find('img[data-testid="footer-img"]')
                .prop('src')
        ).toEqual('/vercel.svg');
    });
});