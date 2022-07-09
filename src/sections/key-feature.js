/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Friends from 'assets/friends.svg';
import Spa from 'assets/spa.svg';
import Weekend from 'assets/weekend.svg';

const data = [
  {
    id: 1,
    imgSrc: Spa,
    altText: 'Wellness',
    title: 'Viel Wellness...',
    text:
      '',
  },
  {
    id: 2,
    imgSrc: Weekend,
    altText: 'Wochenende',
    title: '... am Wochenende ...',
    text:
      '',
  },
  {
    id: 3,
    imgSrc: Friends,
    altText: 'Mädels',
    title: '... mit den Mädels!',
    text:
      '',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Was wäre ein Geburtstag..."
          title="... ohne Geschenk?"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '40px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '0px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
