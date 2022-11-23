import { HomeHeader } from './HomeHeader';
import { DestinationRecommended } from './DestinationRcm';
import { HomeBanner } from './HomeBanner';
import { ExploreStories } from './ExploreStories';
import { TravelerAccount } from './TravelerAccount';

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <DestinationRecommended />
      <HomeBanner />
      <ExploreStories />
      <TravelerAccount />
    </>
  );
};
