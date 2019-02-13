/** @jsx h */

import h from '../../helpers/h'

export const schema = {
  blocks: {
    paragraph: {},
    title: {},
    quote: {
      nodes: [
        {
          match: [{ type: 'paragraph' }],
          min: 2,
        },
        {
          match: [{ type: 'title' }],
        },
      ],
      normalize: (editor, { code, node, index, count, limit }) => {
        if (code == 'child_min_invalid') {
          editor.insertNodeByKey(node.key, index, {
            object: 'block',
            type: 'paragraph',
          })

          editor.setNodeByKey(node.key, {
            data: {
              min: { index, count, limit },
            },
          })
        }
      },
    },
  },
}

export const input = (
  <value>
    <document>
      <quote>
        <paragraph>
          <text />
        </paragraph>
        <block type="title">
          <text />
        </block>
      </quote>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <quote min={{ index: 0, count: 1, limit: 2 }}>
        <paragraph>
          <text />
        </paragraph>
        <paragraph>
          <text />
        </paragraph>
        <block type="title">
          <text />
        </block>
      </quote>
    </document>
  </value>
)
