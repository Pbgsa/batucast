import { mdiBug, mdiSigma, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Stack, Typography } from "@mui/joy";
import { useContext, useState } from "react";
import Header from "../../../../shared/components/Header";
import { HistoryContext } from "../../context/HistoryContext";
import StatisticsModal from "../StatisticsModal";

const HistoryOptions = () => {
  const [statisticsOpen, setStatisticsOpen] = useState<boolean>(false);
  const { service, state } = useContext(HistoryContext);

  return (
    <>
      <Header title="Histórico">
        <Button
          onClick={(evt) => {
            service.createHistory(
              { user_id: "2", song_id: ((evt.clientX % 10) + 1).toString() },
              "2",
            );
          }}
          variant="outlined"
          color="warning"
          startDecorator={<Icon path={mdiBug} size={1} />}
        >
          Add fake song
        </Button>
        <Button
          onClick={() => setStatisticsOpen(true)}
          variant="outlined"
          color="neutral"
          startDecorator={<Icon path={mdiSigma} size={1} />}
        >
          Estatísticas
        </Button>

        <Button
          onClick={() => service.clearHistory("2")}
          variant="outlined"
          color="danger"
          startDecorator={<Icon path={mdiTrashCanOutline} size={1} />}
        >
          Limpar Histórico
        </Button>
      </Header>
      <StatisticsModal open={statisticsOpen} setOpen={setStatisticsOpen} />
    </>
  );
};

export default HistoryOptions;
