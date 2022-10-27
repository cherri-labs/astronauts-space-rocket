import { PowerGlitch } from 'powerglitch';

/* glitch transition selector */
export default function setGlitch(selector,
                                  duration = 800,
                                  iterations = 1,
                                  containers = false) {
  PowerGlitch.glitch(
    selector,
    {
      createContainers: containers,
      hideOverflow: true,
      timing: {
        duration: duration,
        iterations: iterations,
      },
      glitchTimeSpan: {
        start: 0,
        end: 0.4,
      },
    }
  );
}

/* minimal glitch transition */
export function setMinGlitch(selector) {
  PowerGlitch.glitch(
    selector,
    {
      timing: {
        duration: 2000,
        iterations: 1,
        easing: 'ease-in-out',
      },
      glitchTimeSpan: {
        start: 0,
        end: 1,
      },
    }
  );
}

/* glitch transition */
export function setTransGlitch(selector) {
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
