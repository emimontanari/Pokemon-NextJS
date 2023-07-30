import { Container, Text } from "@nextui-org/react"
import { Layout } from "../layouts"
import Image from "next/image"

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text h1>No hay Favoritos</Text>

      <Image
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      alt="Pikachu"
      width={ 500 }
      height={ 500 }
      />
    </Container>
  )
}
