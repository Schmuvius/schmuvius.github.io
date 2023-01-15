import { random, times } from 'lodash';
import { ComponentChildren } from 'preact';
import { keyframes, styled, theme } from 'stitches.config';

export interface LightShowProps extends HTMLDivElement {
  count?: number;
  spread?: number;
  breathingRange?: number;
  breathingTimeMin?: number;
  breathingTimeMax?: number;
  sizeMin?: number;
  sizeMax?: number;
  blurSize?: number;
}

const Container = styled('div', {
  position: 'relative',
});
const Content = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
});
// 🤨
const Balls = styled('div', {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
});
const Ball = styled('div', {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  borderRadius: '100%',
});

export default function LightShow({
  children,
  blurSize = 10,
  breathingRange = 5,
  breathingTimeMax = 5,
  breathingTimeMin = 10,
  count = 10,
  sizeMax = 10,
  sizeMin = 20,
  spread = 25,
  ...props
}: LightShowProps) {
  // 🤨
  const balls: ComponentChildren[] = [];

  times(count, (index) => {
    const even = index % 2 === 0;
    const leftOrigin = 50 + (Math.random() * 2 - 1) * spread;
    const topOrigin = 50 + (Math.random() * 2 - 1) * spread;
    const animationX = keyframes({
      '0%, 100%': {
        left: `${leftOrigin + breathingRange * (even ? -1 : 1)}%`,
      },
      '50%': {
        left: `${leftOrigin + breathingRange * (even ? 1 : -1)}%`,
      },
    });
    const animationY = keyframes({
      '0%, 100%': {
        top: `${topOrigin + breathingRange * (even ? -1 : 1)}%`,
      },
      '50%': { top: `${topOrigin + breathingRange * (even ? 1 : -1)}%` },
    });
    const size = random(sizeMin, sizeMax, true);

    balls.push(
      <Ball
        css={{
          left: `${leftOrigin}%`,
          top: `${topOrigin}%`,
          animation: `${animationX} ${random(
            breathingTimeMin,
            breathingTimeMax,
            true,
          )}s infinite, ${animationY} ${random(
            breathingTimeMin,
            breathingTimeMax,
            true,
          )}s infinite`,
          width: `${size}%`,
          height: `${size}%`,
          backgroundColor: even
            ? theme.colors.componentBackgroundSolid_accentPrimary
            : theme.colors.componentBackgroundSolid_accentSecondary,
        }}
      />,
    );
  });

  return (
    <Container {...props}>
      <Balls
        css={{
          filter: `blur(calc((${blurSize}vw + ${blurSize}vh) / 2))`,
        }}
      >
        {balls}
      </Balls>
      <Content>{children}</Content>
    </Container>
  );
}
