import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'
import * as PreviewActionCreators from './preview'
import * as InfoActionCreators from './info'

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...PreviewActionCreators,
    ...InfoActionCreators
}
