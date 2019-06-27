import React from 'react'
import { Card, Label } from 'semantic-ui-react'

const colorKey = {
  not_started: 'blue',
  incomplete: 'yellow',
  completed: 'green'
}

export default class ReformCard extends React.Component {
  render() {
    const { show, reform } = this.props

    return (
      <Card
        data-key={reform.name}
        data-sectors={reform.sectors}
        data-name={reform.name}
        data-status={reform.status}
        data-difficulty={reform.difficulty}
      >
        <Card.Content>
          <Card.Header>
            <Label as="span" color={colorKey[reform.status]} ribbon>
              {reform.steps[reform.status].status}
            </Label>
            <h2>{reform.name}</h2>
          </Card.Header>
          <Card.Meta>
            <span>{'difficulty'.toUpperCase()}:</span>{' '}
            {reform.difficulty.toUpperCase()}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <p>{reform.steps[reform.status].description}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <button onClick={show(true, reform)} className="icon-progress btn">
            View Progress
          </button>
        </Card.Content>
      </Card>
    )
  }
}
