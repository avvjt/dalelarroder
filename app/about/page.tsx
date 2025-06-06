import path from 'path';
import { Fragment, Suspense } from 'react';
import Footer from '../components/layouts/footer';
import Header from '../components/layouts/header';
import { CustomMDX } from '../components/mdx';
import SpotifySkeleton from '../components/spotify/spotify-skeleton';
import TopTracks from '../components/spotify/top-tracks';

import WakatimeSkeleton from '../components/wakatime/wakatime-skeleton';
import { readMDXFile } from '../thoughts/utils';
import GithubContributions from './github-contributions/github-contributions';
import Occupation from './occupation';

const contentPath = path.join(process.cwd(), 'app', 'about', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'About',
  description: 'About Abhi',
};

export default function Page() {
  return (
    <Fragment>
      <Header />
      <Occupation />
      <CustomMDX source={content} />
      <GithubContributions />
      <Suspense
        fallback={
          <Fragment>
            <WakatimeSkeleton />
            <SpotifySkeleton />
          </Fragment>
        }
      >
        {/* <WakaStats /> */}
        <TopTracks />
      </Suspense>
      <Footer />
    </Fragment>
  );
}
