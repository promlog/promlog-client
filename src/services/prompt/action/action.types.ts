export interface CopyPromptResponse {
  success: boolean;
  data: {
    copyCount: number;
    promptId: number;
  };
}
