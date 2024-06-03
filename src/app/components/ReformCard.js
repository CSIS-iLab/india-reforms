import React from 'react'
import { Card, Label } from 'semantic-ui-react'
import ReformDetail from './ReformDetail'

const colorKey = {
  not_started: 'blue',
  incomplete: 'yellow',
  completed: 'green'
}

export default class ReformCard extends React.Component {
  render() {
    const { show, reform } = this.props
    const htmlContent = {
      __html: reform.steps[reform.status].description
    }
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
            <h2 className="title">{reform.name}</h2>
          </Card.Header>
          <Card.Meta>
            <span>{'difficulty'.toUpperCase()}:</span>
            {reform.difficulty.toUpperCase()}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Description className="current trunctate">
            <p
              dangerouslySetInnerHTML={htmlContent}
            />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Description className="progress">
            <ReformDetail active={reform} />
          </Card.Description>

          <button onClick={show(true, reform)} className="icon-progress btn">
            View Progress
          </button>
        </Card.Content>
      </Card>
    )
  }
}
