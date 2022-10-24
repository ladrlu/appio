import { Txt, Button, ButtonProps, Container } from "anolis-ui";
import { x } from "@xstyled/emotion";
import React from "react";

interface SectionProps extends ButtonProps {
  title?: string;
  perex?: string;
  children?: React.ReactNode | React.ReactNode[];
  buttonText?: string;
}

export const Section = ({
  title,
  perex,
  children,
  href,
  target,
  buttonText,
}: SectionProps) => {
  return (
    <x.div
      mt={{ _: "md", xl: "xxl" }}
      mb={{ _: "md", xl: "xxl" }}
      pb={{ last: "xxl" }}
    >
      <Txt t="h2" maxWidth="45rem" margin="xl auto md auto" textAlign="center">
        {title}
      </Txt>
      <Txt t="lead" maxWidth="45rem" margin="0 auto xl auto" textAlign="center">
        {perex}
      </Txt>
      {children}
      {href && (
        <Container mt={{ _: "md", xl: "4rem" }}>
          <Button href={href} target={target}>
            {buttonText}
          </Button>
        </Container>
      )}
    </x.div>
  );
};
