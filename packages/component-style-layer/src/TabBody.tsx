import { gray300, gray800, h1Heading } from "@atrilabs/design-system";
import React, { useCallback, useState } from "react";

const styles: { [key: string]: React.CSSProperties } = {
  // top level container
  container: {
    display: "flex",
    flexDirection: "column",
  },

  // alias container
  aliasContainer: {
    ...h1Heading,
    color: gray300,
    padding: "0.5rem",
    borderBottom: `1px solid ${gray800}`,
    background: "transparent",
  },
};

export const TabBody: React.FC = () => {
  const [alias, setAlias] = useState<string>("");
  const setAliasCb = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAlias(event.target.value.replace(/\s+/g, "_"));
    },
    []
  );
  return (
    <div style={styles.container}>
      <input
        style={styles.aliasContainer}
        onChange={setAliasCb}
        value={alias}
      />
    </div>
  );
};
