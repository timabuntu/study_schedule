import { DefaultUi, Player, Youtube } from '@vime/react';

import '@vime/core/themes/default.css';

interface ControlVideoProps {
  lessonVideoId: string;
}

export function ControlVideo(props: ControlVideoProps) {
  return (
    <Player>
      <Youtube videoId={props.lessonVideoId} />
      <DefaultUi />
    </Player>
  );
}
