import * as React from 'react';
import {shallow, configure} from 'enzyme';
import MainComponent from "../main.component";
import Link from "next/link";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

interface PostInterface {
    id: number,
    title: string,
    date: string
}

const __POSTS__: PostInterface[] = [
    {
        id: 1,
        title: "Test 1",
        date: "2020-01-01"
    }
];

describe("Main Component", () => {
    it('renders the H1 Title', () => {
        const mainRender = shallow(<MainComponent posts={[]} />);

        expect(
            mainRender.find('h1[data-testid="h1-title"]').text()
        ).toContain("Read");

        expect(
            mainRender.find('h1[data-testid="h1-title"]').contains(
                <Link href={`/sample/first-post`}>
                    <a>this page!</a>
                </Link>
            )
        ).toEqual(true);
    });

    it('renders the Get Started Paragraph', () => {
        const mainRender = shallow(<MainComponent posts={[]} />);

        expect(
            mainRender.find('p[data-testid="p-get-started"]').text()
        ).toContain("Get started by editing");

        expect(
            mainRender.find('p[data-testid="p-get-started"]').contains(
                <code>pages/index.tsx</code>
            )
        ).toEqual(true);
    });

    it('renders post item', () => {
        const mainRender = shallow(<MainComponent posts={__POSTS__} />);

        expect(
            mainRender
                .find('div[data-testid="div-post-item"]')
                .find('Link[data-testid="div-post-link"]')
                .prop('href')
        ).toEqual('/posts/[id]');

        expect(
            mainRender
                .find('div[data-testid="div-post-item"]')
                .find('Link[data-testid="div-post-link"]')
                .prop('as')
        ).toEqual('/posts/1');

        expect(
            mainRender
                .find('div[data-testid="div-post-item"]')
                .find('Link[data-testid="div-post-link"]')
                .find('span[data-testid="div-post-id"]')
                .text()
        ).toContain("1");

        expect(
            mainRender
                .find('div[data-testid="div-post-item"]')
                .find('Link[data-testid="div-post-link"]')
                .find('span[data-testid="div-post-date"]')
                .text()
        ).toContain("2020-01-01");

        expect(
            mainRender
                .find('div[data-testid="div-post-item"]')
                .find('Link[data-testid="div-post-link"]')
                .find('span[data-testid="div-post-title"]')
                .text()
        ).toContain("Test 1");
    });
});


