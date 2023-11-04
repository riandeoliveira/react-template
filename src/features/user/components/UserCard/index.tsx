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
} from "@chakra-ui/react";
import { userStore } from "features/user/store";
import type { UserDTO } from "features/user/types";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { modalStore } from "store/modal.store";
import styles from "./styles.module.scss";

interface UserCardProps extends UserDTO.User {}

export const UserCard = observer((props: UserCardProps): ReactElement => {
  const { avatar, first_name, last_name, email } = props;

  const handleOpenModal = (): void => {
    userStore.setSelected(props);
    modalStore.open("deleteUser");
  };

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
          <IconButton aria-label="Edit user" icon={<EditIcon />} colorScheme="blue" />
          <IconButton
            aria-label="Delete user"
            icon={<DeleteIcon />}
            colorScheme="red"
            onClick={handleOpenModal}
          />
        </div>
      </CardFooter>
    </Card>
  );
});
