import {
  IonApp,
  IonButton,
  IonItem,
  IonItemSliding,
  IonPage,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  IonChip,
} from "@ionic/react";
import React from "react";

const Chip = () => {
  return (
    <IonChip color="danger">
      <IonLabel color="secondary">Secondary</IonLabel>
    </IonChip>
  );
};

export default Chip;
