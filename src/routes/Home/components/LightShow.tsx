import { random, times } from 'lodash';
import { ComponentChildren } from 'preact';
import { keyframes, styled, theme } from 'stitches.config';

const BALLS_COUNT = 10;
const BALL_ORIGIN_RANGE = 25;
const BALL_BREATH_RANGE = 5;
const BALL_BREATH_TIME_MIN = 5;
const BALL_BREATH_TIME_MAX = 10;
const BALL_SIZE_MIN = 10;
const BALL_SIZE_MAX = 20;

const Background = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  overflow: 'hidden',
  filter: 'blur(10vw)',
});
const Ball = styled('div', {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  borderRadius: '100%',

  variants: {
    color: {
      primary: {
        backgroundColor: theme.colors.componentBackgroundSolid_accentPrimary,
      },

      secondary: {
        backgroundColor: theme.colors.componentBackgroundSolid_accentSecondary,
      },
    },
  },
});

export default function LightShow() {
  // 🤨
  const balls: ComponentChildren[] = [];

  times(BALLS_COUNT, (index) => {
    const even = index % 2 === 0;
    const leftOrigin = 50 + (Math.random() * 2 - 1) * BALL_ORIGIN_RANGE;
    const topOrigin = 50 + (Math.random() * 2 - 1) * BALL_ORIGIN_RANGE;
    const animationX = keyframes({
      '0%, 100%': {
        left: `${leftOrigin + BALL_BREATH_RANGE * (even ? -1 : 1)}%`,
      },
      '50%': {
        left: `${leftOrigin + BALL_BREATH_RANGE * (even ? 1 : -1)}%`,
      },
    });
    const animationY = keyframes({
      '0%, 100%': {
        top: `${topOrigin + BALL_BREATH_RANGE * (even ? -1 : 1)}%`,
      },
      '50%': { top: `${topOrigin + BALL_BREATH_RANGE * (even ? 1 : -1)}%` },
    });
    const size = random(BALL_SIZE_MIN, BALL_SIZE_MAX, true);

    const CustomBall = styled(Ball, {
      left: `${leftOrigin}%`,
      top: `${topOrigin}%`,
      animation: `${animationX} ${random(
        BALL_BREATH_TIME_MIN,
        BALL_BREATH_TIME_MAX,
        true,
      )}s infinite, ${animationY} ${random(
        BALL_BREATH_TIME_MIN,
        BALL_BREATH_TIME_MAX,
        true,
      )}s infinite`,
      width: `${size}%`,
      height: `${size}%`,

      defaultVariants: {
        color: even ? 'primary' : 'secondary',
      },
    });

    balls.push(<CustomBall />);
  });

  return <Background>{balls}</Background>;
}
