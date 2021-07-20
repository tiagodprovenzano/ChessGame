import { ITileAnimationActions } from "./ITileAnimationActions";

export type ITileAnimationSubscriptions = Record<ITileAnimationActions, Array<(value: any) => void>>;
