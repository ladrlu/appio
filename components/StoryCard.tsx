import { Card, CardProps, TextLink } from "anolis-ui";
import { x } from "@xstyled/emotion";
import Link from "next/link";
import { UrlObject } from "url";
import React, { useState } from "react";

interface StoryCardProps extends CardProps {
  styledTitle: string;
  perex: string;
  linkText?: string;
  url: string | UrlObject;
}

export const StoryCard = ({
  v = "outlined",
  perex,
  styledTitle,
  linkText = "story detail",
  tag,
  url,
}: StoryCardProps) => {
  const [active, setActive] = useState(false);
  return (
    <Link href={url}>
      <Card
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        v={v}
        footer={<TextLink v="underlined">{linkText}</TextLink>}
        tag={tag}
        borderColor={active ? "white" : "text"}
        boxShadow={active ? "card" : "none"}
        cursor="pointer"
      >
        <x.h3
          fontSize="basic"
          color={active ? "white" : "primary"}
          fontWeight={400}
          borderBottom="2px solid"
          borderColor={active ? "white" : "transparent"}
          w="fit-content"
          mb="lg"
          transition
        >
          {styledTitle}
        </x.h3>
        <x.p transition color={active ? "white" : "text"}>
          {perex}
        </x.p>
      </Card>
    </Link>
  );
};
