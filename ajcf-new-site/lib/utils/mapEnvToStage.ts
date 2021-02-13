import { Stage } from "../../types/types";

export const mapEnvToStage = (env?: string): Stage => {
  if (!env) throw new Error("ENV variable should be set.");
  return env === "prod" ? Stage.Published : Stage.Draft;
};
