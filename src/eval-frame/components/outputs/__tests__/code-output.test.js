import React from 'react'
import { shallow } from 'enzyme'

import { CodeOutputUnconnected as CodeOutput } from '../code-output'
import OutputContainer from '../output-container'
import OutputRow from '../output-row'
import OutputRenderer from '../output-renderer'

describe('CodeOutput_unconnected react component', () => {
  let props
  let mountedCell
  const output = () => {
    if (!mountedCell) {
      mountedCell = shallow(<CodeOutput {...props} />)
    }
    return mountedCell
  }

  beforeEach(() => {
    props = {
      cellId: 5,
      showSideEffectRow: false,
      showOutputRow: false,
    }
    mountedCell = undefined
  })

  it('always renders one OutputContainer', () => {
    expect(output().find(OutputContainer))
      .toHaveLength(1)
  })

  it('if both "show" props are false, output container has no children', () => {
    expect(output().find(OutputContainer).children())
      .toHaveLength(0)
  })

  it("if showOutputRow = true, there's an output row with an output renderer", () => {
    props.showOutputRow = true
    expect(output().find(OutputRow))
      .toHaveLength(1)

    expect(output().find(OutputRow).find(OutputRenderer))
      .toHaveLength(1)
  })

  it("if showSideEffectRow = true, there's an output row with a side-effect-target div", () => {
    props.showOutputRow = true
    expect(output().find(OutputRow))
      .toHaveLength(1)

    expect(output().find(OutputRow).find(OutputRenderer))
      .toHaveLength(1)
  })
})
