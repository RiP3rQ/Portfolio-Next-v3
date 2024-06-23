"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import EnglishLanguageIcon from "@/components/language/custom-icons/english-icon";
import PolishLanguageIcon from "@/components/language/custom-icons/polish-icon";
import { useLocation } from "@/providers/localization-provider";

export function LanguageToggle() {
  const { data, setData } = useLocation();

  return (
    <>
      {data === "EN" ? (
        <Button
          variant="ghost"
          size="icon"
          className={"size-8 pl-2"}
          onClick={() => setData("PL")}
        >
          <EnglishLanguageIcon />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className={"size-8 pl-2"}
          onClick={() => setData("EN")}
        >
          <PolishLanguageIcon />
        </Button>
      )}
    </>
  );
}
