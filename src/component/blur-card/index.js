import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./blur-card.css";
import { motion, AnimatePresence } from "framer-motion";

const BlurCard = ({
  children,
  height,
  width,
  title,
  name,
  onClickFun,
  blurCardId,
  clickedCardId,
  setClickedCardId,
  secondChildren
}) => {
  const [previewId, setPreviewId] = useState(null);

  const handleBlurCardClick = () => {
    setPreviewId(previewId ? null : blurCardId);
    if (blurCardId === undefined) {
      setClickedCardId((prev) => prev);
    } else {
      setClickedCardId(blurCardId);
    }
  };
  return (
    // <AnimatePresence>
    <>
      {/* {previewId && <div className="backdrop"></div>} */}
      <motion.div
        layoutId={blurCardId}
        name={name}
        onClick={handleBlurCardClick}
        className={`blurcard ${previewId && "preview-card"}`}
        // className={`blurcard`}
        style={{
          height: height,
          width: width,
          zIndex: blurCardId === clickedCardId && "9999",
        }}
      >
        {!previewId && (
          <>
            <h3 className="typography-color blur-card-title">{title}</h3>
            {children}
          </>
        )}
      </motion.div>
      <AnimatePresence>
        {previewId && (
          <motion.div
            layoutId={blurCardId}
            name={name}
            onClick={handleBlurCardClick}
            className={`blurcard ${previewId && "preview-card"}`}
            // className={`blurcard`}
            style={{
              height: height,
              width: width,
              zIndex: blurCardId === clickedCardId && "9999",
            }}
          >
            {secondChildren}
          </motion.div>
        )}
      </AnimatePresence>
    </>
    // </AnimatePresence>
  );
};

export default BlurCard;
