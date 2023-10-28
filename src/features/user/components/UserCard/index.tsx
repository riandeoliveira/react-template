import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import type { UserDTO } from "features/user/types";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

interface UserCardProps extends UserDTO.User {}

export const UserCard = observer(
  ({ avatar, email, first_name, last_name }: Omit<UserCardProps, "id">): ReactElement => {
    return (
      <Card maxW="sm">
        <CardBody>
          <Image src={avatar} alt="Image of a user" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{first_name}</Heading>
            <Heading size="md">{last_name}</Heading>
            <Heading size="md">{email}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  },
);
