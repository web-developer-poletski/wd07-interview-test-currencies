import React from 'react'
import { shallow } from 'enzyme'
import Currency from './Currency'

describe('Components: <Currency />', () => {
  it('Should render without crashing', () => {
    const currencyComponent = shallow(<Currency/>)
  })
})