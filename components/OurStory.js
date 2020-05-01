import classNames from 'classnames';

import '../styles/index.css';

const OurStory = () => (
  <div
    className={classNames(
      'section',
      'our-story-section'
    )}>
    <div className="content-wrapper">
       <h2 id="our-story" className="our-story-title">Our Story</h2>
       <p className="our-story-text">We first met in 2009, as NYU Shanghai study abroad students. At the time, Steph was a “sceney art kid” rocking thick black eyeliner and red hair dye. Vic was still a “hypebeast” - frequently caught sporting his “Tiffany lows” and camping on the street for sneakers. Truly — love can be found in a hopeless place.</p>
       <p className="our-story-text">We hit it off as just friends first - bonding over art, food, culture, music, and nature documentaries - but one night, after attending a friend’s party in the east village, Vic offered to walk Steph home…  As one might imagine, it was a beautiful mess from there on out and, with some encouragement from friends, both of our lives were turned upside down forever.</p>
       <p className="our-story-text">In 2015, the two of us quit our day jobs to backpack around the world for a year. We spent an entire 13 months within 3 feet of each other (a sort of backpacker's quarantine, if you will) - problem solving together, taking risks together, getting lost together, sleeping on a variety of hard surfaces whilst swatting away mosquitos together. By the end of our trip, we knew this was it for us.</p>
    </div>
  </div>
);

export default OurStory;
