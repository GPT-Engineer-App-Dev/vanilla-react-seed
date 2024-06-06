import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Private = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Private Page</Heading>
        <Text fontSize="lg">This page is only accessible to authenticated users.</Text>
      </VStack>
    </Container>
  );
};

export default Private;