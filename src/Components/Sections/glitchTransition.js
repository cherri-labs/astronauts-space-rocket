import { PowerGlitch } from 'powerglitch';

/* glitch background for ms time */
export default function glitchTrans(selector) {
  PowerGlitch.glitch(
    selector,
    {
      createContainers: false,
      playMode: 'always',
      hideOverflow: true,
      timing: {
        duration: 1000,
        iterations: 1,
        easing: 'ease-in-out',
      },
      glitchTimeSpan: {
        start: 0,
        end: 0.5,
      },
      shake: {
        velocity: 10,
        amplitudeX: 0.4,
        amplitudeY: 0.4,
      },
      slice: {
        count: 4,
        velocity: 10,
        minHeight: 0.02,
        maxHeight: 0.40,
        hueRotate: true,
      },
    }
  );
}
