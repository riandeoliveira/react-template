import { Image } from "@/components/image";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { type ReactElement } from "react";

export const HomePage = (): ReactElement => {
  return (
    <div className="text-sla">
      <h1>Olá, Mundo!</h1>
      <CompareArrowsIcon />
      <div className="p-24">
        <Image
          src="https://media.licdn.com/dms/image/C4D03AQF6S7G_2aqBsw/profile-displayphoto-shrink_200_200/0/1651241675749?e=1721865600&v=beta&t=R4vmSvRSsfV6e01orfdOCEClxyS_yDyBYt0g2kaCe3w"
          alt=""
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
