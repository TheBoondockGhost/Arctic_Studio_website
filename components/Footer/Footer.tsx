import { Center } from "../Center";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faVk } from "@fortawesome/free-brands-svg-icons";
import {
  Container,
  ConnectionCard,
  LeftSide,
  RightSide,
  ListBody,
  BoldText,
  NormalText,
  ContactBlock,
  Messengers,
  AddressBlock,
} from "./style"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container id={"Contacts"}>
      <Center>
        {/* <a href="https://newline.co">Newline.co</a> {currentYear} */}
        <ConnectionCard>
          <LeftSide>
            <ListBody>
              <li><BoldText><a>Акции и скидки</a></BoldText></li>
              <li><BoldText><a>Галерея работ</a></BoldText></li>
              {/* <li><BoldText><a>Полезные статьи</a></BoldText></li> */}
            </ListBody>
            <ContactBlock>
              <BoldText>Контакты</BoldText>
              <NormalText><a>+7 (495) 748-98-00</a></NormalText>
              <NormalText><a>7403249@mail.ru</a></NormalText>
            </ContactBlock>
            <ContactBlock>
              <BoldText>Мы в социальных сетях</BoldText>
              <Messengers>
                <FontAwesomeIcon icon={faWhatsapp} size="3x" style={{ marginRight: "5px" }} />
                <FontAwesomeIcon icon={faInstagram} size="3x" style={{ marginRight: "5px" }} />
                <FontAwesomeIcon icon={faVk} size="3x" />
              </Messengers>
            </ContactBlock>
          </LeftSide>
          <RightSide>
            <AddressBlock>
              <BoldText>Адрес</BoldText>
              <NormalText>Московская область</NormalText>
              <NormalText>г. Ивантеевка</NormalText>
              <NormalText>ул. Хлебозаводская</NormalText>
              <NormalText>д. 31 / 1</NormalText>
            </AddressBlock>
            <AddressBlock>
              <BoldText>Магазин-приемный пункт</BoldText>
              <NormalText>Московская область</NormalText>
              <NormalText>г. Ивантеевка</NormalText>
              <NormalText> ул. Новоселки д. 4</NormalText>
              <NormalText>на территории ателье “Дует”</NormalText>
              <NormalText>(вход с торца дома слева)</NormalText>
            </AddressBlock>
          </RightSide>
        </ConnectionCard>
      </Center>
    </Container>
  )
}
