import { NextPage } from "next";
import { Container } from "anolis-ui";
import { StoryCard } from "components/StoryCard";
import { Section } from "components/Section";

const Index: NextPage = () => {
  return (
    <>
      <Container v="fluid">
        <Section
          title="H2 Card stories"
          perex="Sérií místa by dostal stopa kotel soudí byl, 
          miliony obou v superexpoloze s oborechjednou hibernujícím výborná slavný."
          href="/"
          buttonText="CTA Button"
        >
          <Container
            display="grid"
            gridTemplateColumns={{ _: 1, lg: 2, xl: 3 }}
            gap={{ _: "md", lg: "lg" }}
          >
            <StoryCard
              url="/"
              styledTitle="Title"
              perex="Lorem ipsum"
              tag="Tag / Badge"
            />
            <StoryCard
              url="/"
              styledTitle="Title"
              perex="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt, 
              lectus in aliquam sodales, libero leo ornare dolor, id sollicitudin arcu sapien at turpis. 
              Quisque vel hendrerit neque. In aliquam congue enim nec volutpat. 
              Nam sed nunc euismod, iaculis nibh sed, posuere enim."
              tag="Tag / Badge"
            />
            <StoryCard
              url="/"
              styledTitle="Title"
              perex="Lorem ipsum"
              tag="Tag / Badge"
            />
            <StoryCard
              url="/"
              styledTitle="Title"
              perex="Lorem ipsum"
              tag="Tag / Badge"
            />
            <StoryCard
              url="/"
              styledTitle="Title"
              perex="Lorem ipsum"
              tag="Tag / Badge"
            />
          </Container>
        </Section>
        <Section
          title="H2 Card stories"
          perex="Sérií místa by dostal stopa kotel soudí byl, 
          miliony obou v superexpoloze s 
          oborechjednou hibernujícím výborná slavný."
        >
          <Container
            display="grid"
            gridTemplateColumns={{ _: 1, lg: 2, xl: 3 }}
            gap={{ _: "sm", lg: "lg" }}
          >
            <StoryCard
              url="/"
              styledTitle="Title"
              perex="Lorem ipsum"
              tag="Tag / Badge"
            />
            <StoryCard
              url="/"
              styledTitle="Title"
              perex="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt, 
              lectus in aliquam sodales, libero leo ornare dolor, id sollicitudin arcu sapien at turpis. 
              Quisque vel hendrerit neque. In aliquam congue enim nec volutpat. 
              Nam sed nunc euismod, iaculis nibh sed, posuere enim."
              tag="Tag / Badge"
            />
            <StoryCard
              url="/"
              styledTitle="Title"
              perex="Lorem ipsum"
              tag="Tag / Badge"
            />
            <StoryCard
              url="/"
              styledTitle="Title"
              perex="Lorem ipsum"
              tag="Tag / Badge"
            />
            <StoryCard
              url="/"
              styledTitle="Title"
              perex="Lorem ipsum"
              tag="Tag / Badge"
            />
          </Container>
        </Section>
      </Container>
    </>
  );
};

export default Index;
