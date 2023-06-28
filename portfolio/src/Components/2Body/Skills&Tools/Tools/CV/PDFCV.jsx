import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import { Skills } from "../../Skills/Skills";

const styles = StyleSheet.create({
  body: {
    position: "relative",
    backgroundColor: "red",
    width: "100%",
    height: "100%",
    zIndex: "8",
  },
  header: { backgroundColor: "red" },
});

export const PDFCV = () => {
  return (
    <Document>
      <Page style={styles.body}></Page>
    </Document>
  );
};
