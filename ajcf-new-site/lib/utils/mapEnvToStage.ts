import { Stage } from "../../types/types";

export const mapEnvToStage = (env?: string): Stage => (env === "prod" ? Stage.Published : Stage.Draft);
