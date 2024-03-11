import PlaylistItem from "../../../../shared/components/PlaylistItem";
import styles from "./index.module.css";

const PlaylistList = ({ playlists, userId }) => (
  <>
    {playlists.map((playlist) => (
      <div
        key={playlist.id}
        className={styles.listItem}
        data-cy={`playlist-item-${playlist.name}`}
      >
        <PlaylistItem playlist={playlist} userId={userId} />
      </div>
    ))}
  </>
);

export default PlaylistList;
