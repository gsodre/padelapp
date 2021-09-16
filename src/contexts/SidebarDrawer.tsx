import { createContext, ReactNode, useContext } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

interface ISidebarDrawerProviderProps {
  children: ReactNode;
}

type ISidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as ISidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: ISidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => disclosure.onClose(), [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
