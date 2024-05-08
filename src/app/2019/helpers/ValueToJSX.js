import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import ImageBlock from './ImageBlock'
import ParagraphBlock from './ParagraphBlock'

export default function ValueToJSX(source, key) {
  return (
    <ReactMarkdown
      escapeHtml={false}
      unwrapDisallowed={true}
      key={key || ''}
      source={source || ''}
      renderers={{
        image: ImageBlock,
        paragraph: ParagraphBlock
      }}
    />
  )
}
