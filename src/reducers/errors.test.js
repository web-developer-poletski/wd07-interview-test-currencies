import actionTypes from '../actions/actionTypes'
import errors from './errors'

describe('Reducers: errors', () => {
  it('Should be a function', () => {
    expect(errors).toBeInstanceOf(Function)
  })

  it('Should return state for actions without errors', () => {
    expect(
      errors(
        {
          message: '',
          error: false
        },
        {
          type: 'ANY_ACTION'
        }
      )
    )
    .toEqual({
      message: '',
      error: false
    })
  })

  it('Should return state for actions with error set improperly', () => {
    expect(
      errors(
        {
          message: '',
          error: false
        },
        {
          type: actionTypes.CURRENCIES_RECEIVE,
          payload: new Error('Error'),
          error: 'ANYTHING_TRUTHY_EXCEPT_BOOLEAN_TRUE'
        }
      ))
      .toEqual({
        message: '',
        error: false
      })
  })

  it('Should store error for actions with error set properly', () => {
    const err = new Error('Error message')

    expect(
      errors(
        {
          message: '',
          error: false
        },
        {
          type: actionTypes.CURRENCIES_RECEIVE,
          payload: err,
          error: true
        }
      )
    )
    .toEqual({
      message: String(err),
      error: true
    })
  })

  it('Should reset error on demand', () => {
    expect(
      errors(
        {
          message: 'Error message',
          error: true
        },
        {
          type: actionTypes.ERRORS_RESET_MESSAGE
        }
      )
    )
    .toEqual({
      message: '',
      error: false
    })
  })
})