import { DynamoDB } from "aws-sdk";

const options = {
  region: "localhost",
  endpoint: "http://localhost:8000",
  secretAccesKey: "x",
  accessKeyId: "x"
}

const isOffline = () => {
  return process.env.IS_OFFLINE;
}

// Verifica se está rodando offline ou não
export const document = isOffline()
  ? new DynamoDB.DocumentClient(options)
  : new DynamoDB.DocumentClient();