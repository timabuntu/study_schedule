import { DefaultUi, Player, Youtube } from '@vime/react';

import '@vime/core/themes/default.css';
export function ControlVideo() {
  return (
    <Player>
      <Youtube videoId='qZevFPMtQho' />
      <DefaultUi />
    </Player>
  );
}
