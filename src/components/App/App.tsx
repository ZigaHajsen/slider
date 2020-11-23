import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from '../../data.json';
import {
  Section,
  Title,
  TitleText,
  TitleSpan,
  SectionCenter,
  PersonImage,
  PersonName,
  PersonTitle,
  PersonQuote,
  PreviousButton,
  NextButton,
} from './AppStyles';
import './AppArticleStyles.css';

const App: React.FC = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <Section>
      <Title>
        <TitleText>
          <TitleSpan>/</TitleSpan>reviews
        </TitleText>
      </Title>
      <SectionCenter>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';

          if (personIndex === index) {
            position = 'activeSlide';
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <PersonImage src={image} alt={name} />
              <PersonName>{name}</PersonName>
              <PersonTitle>{title}</PersonTitle>
              <PersonQuote>{quote}</PersonQuote>
              <FaQuoteRight />
            </article>
          );
        })}
        <PreviousButton onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </PreviousButton>
        <NextButton onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </NextButton>
      </SectionCenter>
    </Section>
  );
};

export default App;
