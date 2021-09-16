import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

interface IProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: IProfileProps) => {
  const { user } = useContext(AuthContext);

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Sodré</Text>
          <Text color="gray.300" fontSize="small">
            {user?.email}
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Gabriel Sodré" />
    </Flex>
  );
};
