import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { shallow } from 'enzyme'

import FormField from './'
import styles from './styles.css'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<FormField />', () => {
  describe('when given children prop does not exist', () => {
    it('should render nothing', () => {
      const sut = shallow(<FormField />)
      expect(sut).to.be.empty
    })
  })

  describe('when given children as prop', () => {
    let sut

    beforeEach(() => {
      sut = shallow(<FormField><div>Final Countdown!!!</div></FormField>)
    })

    it('should render children', () => {
      expect(sut).to.contain(<div>Final Countdown!!!</div>)
    })

    it('should render with style', () => {
      expect(sut).to.have.className(styles.formField)
    })
  })

  describe('when given a className', () => {
    it('should merge classes', () => {
      const sut = shallow(<FormField className="always"><div>Final Countdown!!!</div></FormField>)
      expect(sut).to.have.className('always')
    })
  })
})
