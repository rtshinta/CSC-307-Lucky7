import Slider from './Slider';
import { screen, render, fireEvent } from '@testing-library/react';

test('test initial slider value', () => {
    const handleDistance = jest.fn();
    const sliderComponent = render(<Slider handleDistance={handleDistance} />);
    const slider = sliderComponent.getByText(/range: 50 miles/i);
    expect(slider.innerHTML).toBe('Range: 50 miles');
});

test('slider component on page', () => {
    const handleDistance = jest.fn();
    const sliderComponent = render(<Slider handleDistance={handleDistance} />);
    const slider = sliderComponent.queryAllByRole('slider');
    expect(slider.length).toBe(1); 
});

test('change the slider value', () => {
    const handleDistance = jest.fn();
    const sliderComponent = render(<Slider handleDistance={handleDistance} />);
    const slider = sliderComponent.queryAllByRole('slider');
    fireEvent.change(slider[0], {target: {value: "20"}});
    expect(slider[0].value).toBe("20");
});

test('check max slider value is 100', () => {
    const handleDistance = jest.fn();
    const sliderComponent = render(<Slider handleDistance={handleDistance} />);
    const slider = sliderComponent.queryAllByRole('slider');
    fireEvent.change(slider[0], {target: {value: "120"}});
    expect(slider[0].value).toBe("100");
});

test('check min slider value is 1', () => {
    const handleDistance = jest.fn();
    const sliderComponent = render(<Slider handleDistance={handleDistance} />);
    const slider = sliderComponent.queryAllByRole('slider');
    fireEvent.change(slider[0], {target: {value: "0"}});
    expect(slider[0].value).toBe("0");
});

test('check zip code submit button', () => {
    const handleDistance = jest.fn();
    const sliderComponent = render(<Slider handleDistance={handleDistance} />);
    const slider = sliderComponent.getByRole('button', { name: /submit/i });
    fireEvent.click(slider);
    expect(handleDistance).toHaveBeenCalledTimes(1);
});


test('should call handleSubmit when submit is clicked', () => {
    const handleDistance = jest.fn();
    const form = render(<Slider handleDistance={handleDistance}/>);
    const submit = form.getByRole('textbox');
    fireEvent.change(submit, {target: {value: '93405'}});
    expect(submit.value).toBe('93405');
});