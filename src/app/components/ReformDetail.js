import React from 'react'
import ValueToJSX from '../helpers/ValueToJSX'
import { Modal } from 'semantic-ui-react'

export default class ReformDetail extends React.Component {
  render() {
    const { open, onClose, active } = this.props

    return (
      <Modal open={open} onClose={onClose} closeIcon>
        <h3>{active.name}</h3>

        <ul className="ant-timeline">
          {Object.keys(active.steps)
            .filter(step => active.steps[step].status)
            .map((step, index) => {
              const number = Object.keys(active.steps).indexOf(active.status)

              const checked = index <= number
              const current = active.status === step

              return (
                <li
                  key={step}
                  color="#e95623"
                  className={`ant-timeline-item ${checked ? 'checked' : ''} ${
                    current ? 'current' : ''
                  }`}
                >
                  <div className="ant-timeline-item-tail" />

                  <div className="ant-timeline-item-head" />
                  <div className="ant-timeline-item-content">
                    <span className="status">{active.steps[step].status}</span>
                    {ValueToJSX(active.steps[step].description)}
                    {checked && index !== 0 ? (
                      <p className="source">
                        <a
                          href={active.steps[step].link}
                          className="icon-link-external"
                        >
                          Source
                        </a>
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                </li>
              )
            })}
        </ul>
      </Modal>
    )
  }
}
