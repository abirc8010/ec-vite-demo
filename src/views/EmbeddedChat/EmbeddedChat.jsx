import { EmbeddedChat } from "ec-test-react";
import MintMeadow from "../../theme/MintMeadow";
import styles from "./EmbeddedChat.module.css";

const ECComponent = ({ isEcOpen, setIsECOpen }) => {
  return (
    <div className={styles.ecContainer}>
      <EmbeddedChat
        anonymousMode
        theme={MintMeadow}
        height="85vh"
        width="55vw"
        isClosable={true}
        setClosableState={() => {
          isEcOpen && setIsECOpen((prev) => !prev);
        }}
      />
    </div>
  );
};

export default ECComponent;
