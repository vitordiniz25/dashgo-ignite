import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vitor Diniz</Text>
          <Text color="gray.300">vitordiniz25@gmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Vitor Diniz"
        src="https://github.com/vitordiniz25.png"
      />
    </Flex>
  );
}
