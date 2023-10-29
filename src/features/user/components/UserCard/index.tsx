import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import type { UserDTO } from "features/user/types";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

interface UserCardProps extends UserDTO.User {}

export const UserCard = observer(
  ({ avatar, email, first_name, last_name }: Omit<UserCardProps, "id">): ReactElement => {
    return (
      <Card className={styles.card}>
        <CardBody>
          <Image
            src={avatar}
            alt={`An image of the user ${first_name} ${last_name}`}
            borderRadius="lg"
            className={styles.avatar}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">
              {first_name}
              &nbsp;
              {last_name}
            </Heading>
            <Text>{email}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className={styles.card_footer}>
            <Tooltip label="Atualizar usuário">
              <IconButton aria-label="Edit user" icon={<EditIcon />} colorScheme="blue" />
            </Tooltip>
            <Tooltip label="Apagar usuário">
              <IconButton aria-label="Delete user" icon={<DeleteIcon />} colorScheme="red" />
            </Tooltip>
          </div>
        </CardFooter>
      </Card>
    );
  },
);
