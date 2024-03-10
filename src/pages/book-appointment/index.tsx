import Title from "@/components/title";
import { cormorant } from "@/constants";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Container, BookTitleImageWrapper, BookTitleWrapper, FormContainer, BookContainer, MapContainer, InfoContainer } from "@/pages/book-appointment/styles";

function BookAppoinment() {
  return (
    <Container>
      <BookTitleImageWrapper>
        <BookTitleWrapper>
          <Title fontFamily={cormorant.className} size={70} color="#fff">Book An Appointment With Our Groom Specialist Today!</Title>
        </BookTitleWrapper>
      </BookTitleImageWrapper>
      <BookContainer>
        <FormContainer>
          <Title fontFamily={cormorant.className} size={40}>Enter your information here</Title>
          <InfoContainer>
            <input type="text" placeholder="First name"/>
            <input type="text" placeholder="Last name"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Phone number"/>
          </InfoContainer>
        </FormContainer>
        <MapContainer>
          <YMaps>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 15 }} height={500} width={500}>
              <Placemark defaultGeometry={[55.75, 37.57]}/>
            </Map>
          </YMaps>
        </MapContainer>
      </BookContainer>
    </Container>
  );
}

export default BookAppoinment;
