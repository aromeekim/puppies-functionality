import React from 'react';
import PuppyCard from "../../components/PuppyCard/PuppyCard";
import { useLocation } from 'react-router-dom';

export default function PuppyDetailPage(props) {
  
  const {state : {puppy} } = useLocation()

  return (
    <>
      <h1>Puppy Details</h1>
      <PuppyCard 
        puppy={puppy}
        key={puppy._id}
      />
    </>
  );
}
