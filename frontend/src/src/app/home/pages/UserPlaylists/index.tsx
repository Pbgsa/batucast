import { Stack } from "@mui/joy";
import { useContext, useEffect } from "react";
import PlaylistHeader from "../../components/UserPlaylistsOptions"; // Importando o componente PlaylistHeader
import { PlaylistContext } from "../../context/PlaylistContext";
import styles from "./index.module.css";
import Cookies from "universal-cookie";
import PlaylistList from "../../components/Playlistlist/PlaylistList";

const PlaylistPage = () => {
  const { service, state } = useContext(PlaylistContext);
  const cookies = new Cookies();

  useEffect(() => {
    service.getUserPlaylists(cookies.get("userId").toString());
  }, [service]);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      className={styles.container}
    >
      <PlaylistHeader />
      <div className={styles.listContainer} data-cy="playlist-list">
        {state.getUserPlaylistsRequestStatus.maybeMap({
          loading: () => <span>Carregando...</span>,
          failed: (states) => (
            <span>Erro ao carregar as playlists! {states.message} </span>
          ),
          succeeded: (playlists) => (
            <>
              {playlists.length > 0 ? (
                <PlaylistList
                  playlists={playlists}
                  userId={cookies.get("userId").toString()}
                />
              ) : (
                <span>Nenhuma playlist encontrada!</span>
              )}
            </>
          ),
        })}
      </div>
    </Stack>
  );
};

export default PlaylistPage;
