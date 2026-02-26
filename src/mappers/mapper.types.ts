export interface PromptFormValues {
  title: string;
  description: string;
  category: string;
  platform: string;
  body: string;
  source: string;
  tips: string;
  anonymous: boolean;
}

export interface SelectOption {
  label: string;
  value: number;
  slug: string;
}
