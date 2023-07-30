import { useEffect, useState } from "react"
import { Container, Grid, Text,Card } from "@nextui-org/react"
import { Layout } from "../../components/layouts"
import Image from "next/image"
import { NoFavorites } from "../../components/ui"
import { localFavorites } from "../../utils"
import { FavoritePokemons } from "../../components/pokemon"

const FavoritosPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title="Pokemon - Favoritos">
      {
        favoritesPokemons.length === 0 ? (
          <NoFavorites />) :
          (<FavoritePokemons pokemons={favoritesPokemons}/>)
      }

    </Layout>
  )
}

export default FavoritosPage