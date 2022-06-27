import {
  gray200,
  gray400,
  smallText,
  h5Heading,
} from "@atrilabs/design-system";
import React, { useCallback, useState } from "react";
import { ReactComponent as DropDownArrow } from "../../assets/dropdown-icon.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as UpArrow } from "../../assets/up-arrow.svg";
import { ReactComponent as FlexStart } from "../../assets/flex-start.svg";
import { ReactComponent as FlexEnd } from "../../assets/flex-end.svg";
import { ReactComponent as FlexCenter } from "../../assets/flex-center.svg";
import { ReactComponent as FlexStretch } from "../../assets/stretch-vertical.svg";
import { ReactComponent as FlexBaseline } from "../../assets/baseline-vertical.svg";
import { ReactComponent as JCStart } from "../../assets/jc-flex-start-icon.svg";
import { ReactComponent as JCEnd } from "../../assets/jc-flex-end-icon.svg";
import { ReactComponent as JCCenter } from "../../assets/jc-flex-center-icon.svg";
import { ReactComponent as JCSpaceAround } from "../../assets/jc-space-around-icon.svg";
import { ReactComponent as JCSpaceBetween } from "../../assets/jc-space-between-icon.svg";
import { ReactComponent as NoWrap } from "../../assets/no-wrap-icon.svg";
import { ReactComponent as Wrap } from "../../assets/wrap-icon.svg";
import { ReactComponent as WrapRev } from "../../assets/wrap-rev-icon.svg";
import { ReactComponent as ACFlexStart } from "../../assets/ac-start-icon.svg";
import { ReactComponent as ACFlexEnd } from "../../assets/ac-end-icon.svg";
import { ReactComponent as ACFlexCenter } from "../../assets/ac-center-icon.svg";
import { ReactComponent as ACFlexStretch } from "../../assets/ac-stretch-icon.svg";
import { ReactComponent as ACFlexSpaceBetween } from "../../assets/ac-space-between-icon.svg";
import { ReactComponent as ACFlexSpaceAround } from "../../assets/ac-space-around-icon.svg";
import { ReactComponent as Rectangle } from "../../assets/layout-parent/Rectangle-714.svg";

import { CssProprtyComponentType } from "../../types";
import PropertyRender from "./PropertyRender";
import { IconsContainer } from "../../IconsContainer";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    borderBottom: "1px solid #111827",
  },
  header: {
    ...h5Heading,
    color: gray200,
    display: "flex",
    paddingBottom: "0.5rem",
    height: "25px",
    marginTop:"5px",
    paddingLeft: "0.5rem",
    userSelect: "none",
  },
  rectLabel: {
    ...smallText,
    color: gray400,
    display: "flex",
    textAlign: "center",
    lineHeight: "0px",
  },
  label: {
    marginTop: "0px",
    marginBottom: "10px",
  },
  drop: {
    display: "flex",
    alignItems: "baseline",
  },
  option: {
    display: "flex",
    height: "25px",
    marginBottom: "15px",
  },
  optionName: {
    ...smallText,
    width: "4rem",
    color: "white",
    display: "flex",
    alignItems: "center",
  },
  optionsIcons: {
    flexGrow: 1,
  },
};

// CSS Values for different CSS property (The default value must be at position 0)
// CSS values for flex-direction CSS property (The default value row is at position 0)

// This serves as a Semi-Smart component, i.e. it uses useMemo but not useState or useRef.
export const Layout: React.FC<CssProprtyComponentType> = (props) => {
  const [dis1, setDis1] = useState(true);

  return (
    <>
      <div style={styles.container}>
        <div style={styles.drop}>
          <DropDownArrow
            onClick={() => setDis1(!dis1)}
            style={
              !dis1
                ? { transform: "rotate(-90deg)" }
                : { transform: "rotate(0deg)" }
            }
          />
          <div style={styles.header}>Layout - Flex Parent</div>
        </div>
        <div style={dis1 ? { display: "block" } : { display: "none" }}>
          <PropertyRender
            styles={{
              styleItem: "flexDirection",
              styleText: "Direction",
              styleArray: ["row", "column", "row-reverse", "column-reverse"],
              patchCb: props.patchCb,
              styles: props.styles
            }}
            children={[
              <RightArrow />,
              <DownArrow />,
              <LeftArrow />,
              <UpArrow />,
            ]}
          />
          <PropertyRender
            styles={{
              styleItem: "alignItems",
              styleText: "Align- items",
              styleArray: [
                "stretch",
                "flex-start",
                "center",
                "flex-end",
                "baseline",
              ],
              patchCb: props.patchCb,
              styles: props.styles
            }}
            children={[
              <FlexStretch />,
              <FlexStart />,
              <FlexCenter />,
              <FlexEnd />,
              <FlexBaseline />,
            ]}
          />

          <PropertyRender
            styles={{
              styleItem: "justifyContent",
              styleText: "Justify-Content",
              styleArray: [
                "flex-start",
                "center",
                "flex-end",
                "space-between",
                "space-around",
              ],
              patchCb: props.patchCb,
              styles: props.styles
            }}
            children={[
              <JCStart />,
              <JCCenter />,
              <JCEnd />,
              <JCSpaceBetween />,
              <JCSpaceAround />,
            ]}
          />

          <PropertyRender
            styles={{
              styleItem: "flexWrap",
              styleText: "Wrap",
              styleArray: ["nowrap", "wrap", "wrap-reverse"],
              patchCb: props.patchCb,
              styles: props.styles
            }}
            children={[<NoWrap />, <Wrap />, <WrapRev />]}
          />

          <PropertyRender
            styles={{
              styleItem: "alignContent",
              styleText: "Align-Content",
              styleArray: [
                "stretch",
                "flex-start",
                "center",
                "flex-end",
                "space-between",
                "space-around",
              ],
              patchCb: props.patchCb,
              styles: props.styles
            }}
            children={[
              <ACFlexStretch />,
              <ACFlexStart />,
              <ACFlexCenter />,
              <ACFlexEnd />,
              <ACFlexSpaceBetween />,
              <ACFlexSpaceAround />,
            ]}
          />

          <div style={styles.option}>
            <div style={{ ...styles.optionName, marginTop: "12px" }}>Gap</div>
            <div style={styles.rectLabel}>
              <div style={{ marginRight: "40px" }}>
                <p style={styles.label}>Row</p>
                <Rectangle style={styles.rect} />
                <span style={{ margin: "0px", padding: "0px" }}>PX</span>
              </div>
              <div>
                <p style={styles.label}>Col</p>
                <Rectangle style={styles.rect} />
                <span>PX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
