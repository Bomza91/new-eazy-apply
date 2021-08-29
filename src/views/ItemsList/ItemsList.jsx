import React from "react";
import styled from "styled-components";
import { format as formatDate } from "date-fns";

import { Input } from "../../../components/Input";
import { Button } from "../../../src/components/Button";
import { Layout } from "../../../src/components/Layout";
import { ItemPreview } from "../../../src/components/ItemPreview"; 
import { useItemsList } from './ItemsList.useItemsList';
import { tokens } from "../../../src/data/tokens";
import { ALERTS } from "./ItemsList.useItemsList";

const InputWrapper = styled.div`
  padding: ${tokens.spacing.s}0;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: centre;
  padding-bottom: 1rem;
`;

const ButtonWrap = styled.div`
  padding: 0.5rem;
`;

export const ItemsList = () => {
  const { 
    list, 
    date,
    surname,
    name,
    location,
    priceInCents,
    toggleOverlay,
    submit,
    overlay,
    update
   } = useItemsList

  return (
    <Layout tittle="Shoots">
     <ButtonRow>
       <ButtonWrap>
         <Button action={toggleOverlay}>Filtering</Button>
       </ButtonWrap>
    
    <ButtonWrap>
      <Button action={toggleOverlay} importance="primary">
        Add Shoot
      </Button>
    </ButtonWrap>
    </ButtonRow>

    {list.map(({date, priceInCents, location, surname, id, name}) => (
      <ItemPreview
      key={id}
      title={`${name} ${surname}`}
      action="#"
      helper={location}
      >
        <DateWrapper>
        <Text size="s">{date ? formatDate(date, "ss MMM yyyy") : "No Date"}</Text>
        </DateWrapper>
      </ItemPreview>
    ))}

      <Layout
        overlay={overlay}
        title="Add Shoot"
        form
        padded
        alert={alert && ALERTS[alert]}
        primary={["Add", submit]}
        secondary={["Cancel", toggleOverlay]}
      >
        <InputWrapper>
          <Input label="Name" value={name} onChange={update("name")} />
        </InputWrapper>

        <InputWrapper>
          <Input label="Surname" value={surname} onChange={update("surname")} />
        </InputWrapper>

        <InputWrapper>
          <Input
            accepts="datetime"
            label="Date"
            value={date}
            onChange={update("date")}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Location"
            value={location}
            onChange={update("location")}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Price"
            value={priceInCents}
            onChange={update("priceInCents")}
          />
        </InputWrapper>
      </Layout>
      
    </Layout>
  );
};

export default ItemsList;
