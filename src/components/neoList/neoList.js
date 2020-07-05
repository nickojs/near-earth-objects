import React, { useState } from 'react';
import * as S from './styles';
import { Title, Container, TogglableContainer } from '../../generalStyles';
import Neo from './neo/neo';
import { preview } from '../../helpers/NEOparser';

const NeoList = ({ title, list }) => {
  // 'NEO' stands for 'Near Earth Objects'
  // 'list' is a set of NEOs for a given date, i.e:
  const [toggle, setToggle] = useState(true);

  const neos = list.map((each) => {
    const parsedObj = preview(each);
    return <Neo key={each.id} object={parsedObj} />;
  });

  const toggleHandler = () => setToggle(!toggle);

  return (
    <Container>
      <Title onClick={toggleHandler}>{title}</Title>
      <TogglableContainer toggle={toggle}>
        <S.NeoListContainer>
          {neos}
        </S.NeoListContainer>

      </TogglableContainer>
    </Container>
  );
};

export default NeoList;
