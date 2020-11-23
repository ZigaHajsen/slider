import styled from 'styled-components';

export const Section = styled.section`
  width: 90vw;
  margin: 5rem auto;
  max-width: var(--max-width);

  @media (min-width: 992px) {
    width: 95vw;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const TitleText = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

export const TitleSpan = styled.div`
  font-size: 0.85em;
  color: var(--clr-primary-5);
  margin-right: 1rem;
  font-weight: 700;
`;

export const SectionCenter = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  width: 80vw;
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const PersonImage = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid var(--clr-grey-8);
  box-shadow: var(--dark-shadow);
`;

export const PersonName = styled.h4`
  text-transform: uppercase;
  color: var(--clr-primary-5);
  margin-bottom: 0.25rem;
`;

export const PersonTitle = styled.p`
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  color: var(--clr-grey-3);
`;

export const PersonQuote = styled.h4`
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: var(--clr-grey-5);
`;

export const PreviousButton = styled.button`
  left: 0;
  position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: var(--clr-grey-5);
  color: var(--clr-white);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background: var(--clr-primary-5);
  }

  @media (min-width: 800px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
`;

export const NextButton = styled.button`
  right: 0;
  position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: var(--clr-grey-5);
  color: var(--clr-white);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background: var(--clr-primary-5);
  }

  @media (min-width: 800px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
`;
