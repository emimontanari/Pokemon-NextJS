import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props{
pokemonId: number
}

export const FavoriteCardPokemon:FC<Props>= ({pokemonId}) => {
const router = useRouter()

const onFavoriteClicked =    () => {
    router.push(`/pokemon/${pokemonId}`)
}

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={onFavoriteClicked}>
    <Card isHoverable css={{padding: 10}}>
        <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
          width={'100%'}
          height={100}
    
        />
    </Card>
  </Grid>
  )
}
