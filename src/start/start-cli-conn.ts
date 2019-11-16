import { getCliConnection } from "../../lsp-utils";

export const startCliConn = ({ createLanguageServer, title }) => {
  const connection = getCliConnection(title);
  const server = createLanguageServer({ connection });
  server.start();
  return connection;
};
