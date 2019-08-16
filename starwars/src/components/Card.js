import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CreateCard = (props) => (
  <Card>
    <Card.Content>
      <Image href={props.data.homeworld} alt='homeworld'/>
      <Card.Header>Name: {props.data.name}</Card.Header>
      <Card.Meta>Birth Year: {props.data.birth_year}</Card.Meta>
      <Card.Description>
      <div>Height: {props.data.height}</div> 
      <div>Hair Color: {props.data.hair_color}</div> 
      <div>Gender: {props.data.gender} </div>
      <div>Mass: {props.data.mass}</div>
      <div>Eye-color: {props.data.eye_color}</div>
      <div>Skin-color: {props.data.skin_color}</div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='star' />
      </a>
    </Card.Content>
  </Card>
)

export default CreateCard;