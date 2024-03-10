import styled from "styled-components";
import bookImage from "@/assets/content/book.jpg";
import { colors } from "@/constants";

export const Container = styled.div``;

export const BookTitleImageWrapper = styled.div`
    min-height: 50vh;
    background-image: ${`url(${bookImage.src})`};
    opacity: 0.9;
    padding: 108px;
`;

export const BookTitleWrapper = styled.div`
    max-width: 30vw;
    margin-bottom: 150px;
`;

export const BookContainer = styled.div`
    padding: 48px;
    max-width: 1500px;
    margin: auto;
    display: flex;
    gap: 48px;
    justify-content: space-between;
`;

export const MapContainer = styled.div`
    margin-top: 94px;
    border: 5px solid ${colors.inHouse};
`

export const InfoContainer = styled.div`
    margin-top: 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`

export const FormContainer = styled.div`

`;