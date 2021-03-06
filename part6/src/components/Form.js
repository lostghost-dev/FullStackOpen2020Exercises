import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducer';

const Form = () => {
  const style = {
    marginBottom: 10,
  };

  const dispatch = useDispatch();

  const handleForm = async (event) => {
    event.preventDefault();

    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';

    dispatch(addAnecdote(content));
    dispatch(setNotification(`${content} added to the list`), 5);
  };

  return (
    <div style={style}>
      <h2>Create New</h2>
      <form onSubmit={handleForm}>
        Add Anecdote <input name='anecdote' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default Form;
