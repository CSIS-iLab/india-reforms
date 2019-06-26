import React from 'react'
import ValueToJSX from '../helpers/ValueToJSX'

import { Button, Modal, Header, Icon } from 'semantic-ui-react'
import { Timeline, Icon as Ant } from 'antd'

export default class ReformDetail extends React.Component {
  render() {
    const { open, onClose, active } = this.props
    console.log(active)

    return (
      <Modal open={open} onClose={onClose} closeIcon>
        <h3>{active.name}</h3>

        <Timeline>
          {Object.keys(active.steps)
            .filter(step => active.steps[step].status)
            .map((step, index) => {
              const number = Object.keys(active.steps).indexOf(active.status)

              const checked = index <= number

              return (
                <Timeline.Item
                  key={step}
                  color="#e95623"
                  className={checked ? 'checked' : ''}
                >
                  <span className="status">{active.steps[step].status}</span>
                  {ValueToJSX(active.steps[step].description)}
                  {checked && index !== 0 ? (
                    <p className="source">
                      <a href={active.steps[step].link}>
                        Source <Icon name="external alternate" />
                      </a>
                    </p>
                  ) : (
                    ''
                  )}
                </Timeline.Item>
              )
            })}
        </Timeline>
      </Modal>
    )
  }
}
