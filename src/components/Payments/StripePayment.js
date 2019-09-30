import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { toast } from "react-toastify";
import { data } from '../Profile/Data';
import styled from 'styled-components';
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  height: 90vh;
  padding: 2%;
`;

const Card = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 300px;
  margin: 2% auto;
  padding: 0 0 1%;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 3px 5px;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1%;
`;

const Image = styled.img`
  background-size: cover;
  background-position: center;
  width: 100%;
  transition: 5s;
  overflow: hidden;

  &:hover {
    transform: scale(1.4);
  }
`

function StripePayment(props) {

  const [product, setProduct] = useState(data)

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:3000/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <MainContainer>
      {product.map((listing, index) => {
        return (
          <Card>
          <Content key={listing.id} index={index}>
            <Image src={listing.src} alt={listing.title}/>
            <Details>
              <h1>{listing.title}</h1>
              <h3>Location: {listing.location}</h3>
              <h3>Price: ${listing.price}</h3>
              <StripeCheckout
                stripeKey="pk_test_0L5VqTbdzfyjUN1qNWttvrpV00KlfxWtg1"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={listing.price * 100}
                name={listing.location}
              />
            </Details>
          </Content>
         </Card>
        );
      })}
    </MainContainer>
  )
}

export default StripePayment
