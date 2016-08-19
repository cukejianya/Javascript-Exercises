
export const addTodo = makeAction('ADD_TODO', 'id', 'text');

export const setVisibilityFilter = makeAction(
  'SET_VISIBILITY_FILTER',
  'filter'
);

export const toggleTode = makeAction('TOGGLE_TODO', 'id');

function makeAction (type, ...argsName) {
  return (...args) => {
    let action = {type}
    argsName.forEach((arg, idx) => {
      action[argsName[idx]] = args[idx]
    })

    return action
  }
}
