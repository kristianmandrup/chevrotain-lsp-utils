import { getWorkerConnection } from "../../lsp-utils";
export const startWorker = ({ createLanguageServer }) => {
  const connection = getWorkerConnection();
  const server = createLanguageServer({ connection });
  server.start();
  connection.onExit(self.close);
};
