import { Box, Text, Heading, Flex, Input, Button, VStack, HStack, Image, useToast } from "@chakra-ui/react";
import { FaBus, FaMapMarkedAlt, FaRegClock, FaRegCalendarAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleTrackBus = () => {
    toast({
      title: "Tracking Bus",
      description: "We are locating your bus on the map.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSchedule = () => {
    toast({
      title: "Schedule Retrieved",
      description: "Your bus schedule is now available.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Johannesburg Bus Tracker
      </Heading>

      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-around" wrap="wrap">
        <VStack spacing={4} align="stretch">
          <HStack spacing={3}>
            <FaBus color="green" />
            <Text fontSize="lg">Track Your Bus</Text>
          </HStack>
          <Input placeholder="Enter bus number..." />
          <Button leftIcon={<FaMapMarkedAlt />} colorScheme="green" onClick={handleTrackBus}>
            Track Bus
          </Button>
        </VStack>

        <VStack spacing={4} align="stretch">
          <HStack spacing={3}>
            <FaRegCalendarAlt color="blue" />
            <Text fontSize="lg">View Schedule</Text>
          </HStack>
          <Input placeholder="Enter bus route..." />
          <Button leftIcon={<FaRegClock />} colorScheme="blue" onClick={handleSchedule}>
            Get Schedule
          </Button>
        </VStack>

        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1652299380418-223d27b1b4bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqb2hhbm5lc2J1cmclMjBtYXB8ZW58MHx8fHwxNzA5NTM2MjQ3fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
