import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import "./VideoFooter.css";

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>

        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__title">
            <p>{music}</p>
          </div>
        </div>
      </div>

      <img
        className="videoFooter__record"
        alt="Icone de um vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media"
      />
    </div>
  );
}

export default VideoFooter;
