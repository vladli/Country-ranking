"use client";

import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default Providers;
