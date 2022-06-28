import { DefaultUi, Player, Youtube } from '@vime/react';

export function ControlVideo() {
  return (
    <Player>
      <Youtube videoId='qZevFPMtQho' />
      <DefaultUi />
    </Player>
  );
}
