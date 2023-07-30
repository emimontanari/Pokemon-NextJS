import { SmallPokemon } from "../../interfaces";
import React, { FC, PropsWithChildren } from "react";
import { Button, Card, Grid, Row, Text} from '@nextui-org/react'
import { useRouter } from "next/router";

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard:FC<PropsWithChildren <Props>> = ({pokemon}) => {

    const router = useRouter()
    const onClick = () => {
        router.push(`/name/${pokemon.name}`)
    }

  return (
    <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={2}>
    <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1}}>

          <Card.Image
          src={pokemon.image}
          alt={pokemon.name}
          width="100%"
          height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{pokemon.name}</Text>
            <Text># {pokemon.id}</Text>
          </Row>
        </Card.Footer>
    </Card>
  </Grid>
  )
}
