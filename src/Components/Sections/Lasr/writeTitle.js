import GlitchedWriter, {
  wait, presets
} from 'glitched-writer';

export default async function writeTitle() {
  const Select = new GlitchedWriter('#lasr-title-select',
                                    {...presets.terminal,
                                      mode: "erase_smart",
                                      html: true,
                                      letterize: true});
  const Player = new GlitchedWriter('#lasr-title-player',
                                    {...presets.terminal,
                                      mode: "erase_smart",
                                      html: true,
                                      letterize: true});

  const sep = document.getElementById('lasr-title-sep');

  await wait(200);
  document.getElementById('lasr-title-select').classList.remove('hidden');
  await Select.write("Select");

  await wait(1200);
  document.getElementById('lasr-title-select').classList.remove('cursor');
  document.getElementById('lasr-title-player').classList.remove('hidden');
  await Player.write("Player");

  await wait(800);
  if (sep) {
    sep.classList.remove('hidden');
  }
}
