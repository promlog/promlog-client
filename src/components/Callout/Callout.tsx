import { createContext, useContext } from 'react';

import {
  calloutBodyStyles,
  calloutTitleStyles,
  calloutVariantMap,
} from './Callout.styles';
import type {
  CalloutBodyProps,
  CalloutMainProps,
  CalloutVariant,
} from './Callout.types';

const CalloutContext = createContext<{ variant: CalloutVariant } | null>(null);

const useCalloutContext = () => {
  const context = useContext(CalloutContext);

  if (!context) {
    throw new Error(
      '서브 컴포넌트는 메인 컴포넌트 내부에서만 사용 가능합니다.',
    );
  }

  return context;
};

const CalloutMain = ({ variant, title, children }: CalloutMainProps) => {
  return (
    <CalloutContext.Provider value={{ variant }}>
      <div
        className={`flex flex-col gap-2 rounded-lg border p-4 ${calloutVariantMap[variant]}`}
      >
        {title && <h2 className={calloutTitleStyles[variant]}>{title}</h2>}
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </CalloutContext.Provider>
  );
};

const CalloutText = ({ children }: CalloutBodyProps) => {
  const { variant } = useCalloutContext();

  return <p className={calloutBodyStyles[variant]}>{children}</p>;
};

const CalloutList = ({ children }: CalloutBodyProps) => {
  const { variant } = useCalloutContext();

  return (
    <ul
      className={`pl-4 space-y-1 marker:opacity-60 ${calloutBodyStyles[variant]}`}
    >
      {children}
    </ul>
  );
};

const CalloutListItem = ({ children }: CalloutBodyProps) => (
  <li className="pl-1 list-disc">{children}</li>
);

export const Callout = Object.assign(CalloutMain, {
  Text: CalloutText,
  List: CalloutList,
  Item: CalloutListItem,
});
