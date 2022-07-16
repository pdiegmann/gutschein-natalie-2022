/** @jsx jsx */
import { jsx, Container, Box, Heading } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Maedels from 'assets/maedels-1.jpg';
import Hotel from 'assets/hotel.jpg';

const data = {
  subTitle: 'und wo?',
  title: 'Im Ringhotel am Stadtpark',
  description:
    '',
  btnName: '',
  btnURL: '',
};

export default function PartnerSection() {
  return (
    <section sx={{ variant: 'section.partner' }} id="wo">
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, '0px', 0] }}>
          <Image src={Hotel} alt="Hotel" />
        </Box>
        <Box sx={{ px: [0, null, '0px', 0] }}>
          <Image src={Maedels} alt="Mädels" />
        </Box>

        <Box sx={{ px: [0, null, '0px', 0], pt: '80px', textAlign: 'center' }}><Heading sx={{textAlign: 'center'}}>Wir freuen uns drauf! 🤗</Heading></Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    pt: '40px',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '0px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['0px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
};
