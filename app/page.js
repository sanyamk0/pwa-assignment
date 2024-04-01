"use client";

import { useCallback, useEffect, useState } from "react";

import Button from "@/components/Button";
import Bell from "@/components/Bell";
import Statusbar from "@/components/Statusbar";
import Text from "@/components/Text";

export default function Home() {
  const sendNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("This is a notification", {
        body: "This is the body of the notification",
      });
    }
  };

  const requestNotificationPermission = useCallback(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification Permission Granted");
        }
      });
    }
  }, []);

  useEffect(() => {
    if ("Notification" in window) {
      requestNotificationPermission();
    }
  }, [requestNotificationPermission]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-around w-fit bg-black">
        <Statusbar />
        <Text />
        <Bell />
        <Button onClick={sendNotification} />
      </div>
    </div>
  );
}
