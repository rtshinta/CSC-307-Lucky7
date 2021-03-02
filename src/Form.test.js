import Form from './Form.js'
import { render, fireEvent } from '@testing-library/react';

test('Form input fields should be empty upon rendering', () => {
    const form = render(<Form />);
    const field = form.getByRole('textbox', {name: /event name/i})
    expect(field.innerHTML).toBe('');
});

test('Form input field should mirror input', () => {
    const form = render(<Form />);
    const field = form.getByRole('textbox', {name: /description/i});
    fireEvent.change(field, {target: {value: 'x'}});
    expect(field.value).toBe('x');
});

test('should call handleSubmit when submit is clicked', () => {
    const onClick = jest.fn();
    const form = render(<Form handleSubmit={onClick}/>);
    const submit = form.getByRole('button', {name: /submit/i})
    fireEvent.click(submit);
    expect(onClick).toHaveBeenCalledTimes(1);
});
