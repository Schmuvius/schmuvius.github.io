import LabelPrimitive from 'components/Label';
import Title from 'components/Title';
import { styled, theme } from 'stitches.config';
import LightShow from './components/LightShow';

const Root = styled('div', {
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space.gapUnrelatedMajor,
  zIndex: '1',
});
// const Button = styled(ButtonPrimitive, {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   flex: 1,
//   gap: theme.space.gapRelated,

//   '&': {
//     svg: {
//       width: '1em',
//       height: '1em',
//     },
//   },
// });
// const Actions = styled('div', {
//   display: 'flex',
//   gap: theme.space.gapRelatedMajor,
// });
const Label = styled(LabelPrimitive, {
  textAlign: 'center',
});

export default function Home() {
  return (
    <Root>
      <Content>
        <Title>TrèsAbhi</Title>
        {/* <Actions>
          <Button disabled type="solid" color="accentSecondary">
            Docs
            <ReaderIcon />
          </Button>
          <Button disabled type="solid" color="accentPrimary">
            Projects
            <CaretRightIcon />
          </Button>
        </Actions> */}

        <Label>Coming soon 🔥</Label>
      </Content>

      <LightShow />
    </Root>
  );
}
