import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vitor Diniz</Text>
        <Text color="gray.300">vitordiniz25@gmail.com</Text>
      </Box>

      <Avatar
        size="md"
        name="Vitor Diniz"
        src="https://github.com/vitordiniz25.png"
      />
    </Flex>
  );
}
