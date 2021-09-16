import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiGitMergeLine,
  RiDashboardLine,
  RiInputMethodLine,
  RiHomeLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiHomeLine} href="/news">
          Feed
        </NavLink>
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/adm/users">
          Usuários
        </NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/adm/users">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/adm/users">
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  );
}
