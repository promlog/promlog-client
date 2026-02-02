import type { calloutVariantMap } from './Callout.styles';

export type CalloutVariant = keyof typeof calloutVariantMap;

interface CalloutStyleProps {
  variant: CalloutVariant;
}

interface CalloutBaseProps {
  title?: string;
  children: React.ReactNode;
}

export type CalloutMainProps = CalloutBaseProps & CalloutStyleProps;
export type CalloutBodyProps = Pick<CalloutBaseProps, 'children'>;
