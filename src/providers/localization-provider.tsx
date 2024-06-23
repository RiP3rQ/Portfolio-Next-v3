"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

export type LocationContextProps = {
  data: "EN" | "PL";
  setData: Dispatch<SetStateAction<"EN" | "PL">>;
};
export const LocationContext = createContext<LocationContextProps>({
  data: "EN",
  setData: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function LocationProvider({ children }: Readonly<Props>) {
  const [data, setData] = useState<"EN" | "PL">("EN");
  const contextValue = useMemo<LocationContextProps>(
    () => ({
      data,
      setData,
    }),
    [data, setData],
  );
  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
