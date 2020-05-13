import classNames from 'classnames';
import styles from './OurStory.module.css';

const OurStory = () => (
  <div
    className={classNames(
      'section',
      styles.ourStorySection
    )}>
    <div className="content-wrapper">
       <h2 id="our-story" className={styles.ourStoryTitle}>Our Story</h2>
       <p className={styles.ourStoryText}>We first met in 2009, as NYU Shanghai study abroad students. At the time, Steph was a “sceney art kid” rocking thick black eyeliner and red hair dye. Vic was still a “hypebeast” - frequently caught sporting his “Tiffany lows” and camping on the street for sneakers. Truly — love can be found in a hopeless place.</p>
       <p className={styles.ourStoryText}>We hit it off as just friends first - bonding over art, food, culture, music, and nature documentaries - but one night, after attending a friend’s party in the east village, Vic offered to walk Steph home. As one might imagine, it was a beautiful mess from there on out and, with some encouragement from friends, both of our lives were turned upside down forever.</p>
       <p className={styles.ourStoryText}>In 2015, the two of us quit our day jobs to backpack around the world for a year. We spent an entire 13 months within 3 feet of each other - problem solving together, taking risks together, getting lost together, sleeping on a variety of hard surfaces whilst swatting away mosquitos together. Vic was sure Steph was “the one”, but, as a romantic, he knew he had to wait for the perfect moment to pop the question...</p>
       <p className={styles.ourStoryText}>Last February we travelled back to Shanghai for our 10 year study abroad reunion. Vic proposed to Steph on The Bund the first night of our trip, with the twinkling lights of Shanghai’s waterfront skyline as the backdrop. Steph was so excited, she forgot to say “yes” - instead, she tackled Vic to the ground.</p>
       <p className={styles.ourStoryText}>Fear not - Steph eventually said ”yes”, but Vic takes great joy in reminding her of this quite frequently.</p>
    </div>
  </div>
);

export default OurStory;
