// import Link from "next/link"
// import Image from "next/image"
import { Center } from "../Center"
import { Container, Logo, Nav } from "./style"

export const Header = () => {
  return (
    <Container>
      <Center>
        <Nav>
          <Logo>
            <a href="/">
              <img src="/images/logo_1.png" width={90} height={71} />
            </a>
            {/* <Link href="/">
            <a>What's Next?!</a>
          </Link> */}
          </Logo>
          <ul>
            <li><a href="#what-we-do">Чем мы занимаемся</a></li>
            <li><a href="#services-and-prices">Услуги и цены</a></li>
            <li><a href="#work-gallery">Галерея работ</a></li>
            {/* <li><a href="#">Полезные статьи</a></li> */}
            <li><a href="#Contacts">Контакты</a></li>
          </ul>
        </Nav>
      </Center>
    </Container>
  )
}
