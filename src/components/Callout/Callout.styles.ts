// TODO: positive 디자인 추가 시 대응 필요
export const calloutVariantMap = {
  attentive: 'bg-amber-50 border-amber-200',
  destructive: 'bg-red-50 border-red-200',
} as const;

export const calloutTitleStyles = {
  attentive: 'text-amber-900',
  destructive: 'text-red-900',
} as const;

export const calloutBodyStyles = {
  attentive: 'text-gray-700',
  destructive: 'text-red-700',
};
