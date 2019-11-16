import { ISyntacticContentAssistPath } from "chevrotain";

export * from "./worker/worker";
export * from "./cli/cli";

export interface CompletionCandidate extends ISyntacticContentAssistPath {
  replacementRange?: {
    start: number;
    end: number;
  };
}
