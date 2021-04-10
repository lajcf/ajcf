import { Stage } from "../../types/types";

export const mapEnvToStage = (): Stage => {
  const env = process.env.NEXT_PUBLIC_ENV;
  if (!env) throw new Error("ENV variable should be set.");
  return env === "prod" ? Stage.Published : Stage.Draft;
};
