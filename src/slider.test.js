import Slider from './Slider';
import { screen, render, fireEvent } from '@testing-library/react';

test('test initial slider value', () => {
    const sliderComponent = render(<Slider />);
    const slider = sliderComponent.getByText(/range: 50 miles/i);
    expect(slider.innerHTML).toBe('Range: 50 miles');
});

test('slider component on page', () => {
    const sliderComponent = render(<Slider />);
    const slider = sliderComponent.queryAllByRole('slider');
    expect(slider.length).toBe(1); 
});

test('change the slider value', () => {
    const sliderComponent = render(<Slider />);
    const slider = sliderComponent.queryAllByRole('slider');
    fireEvent.change(slider[0], {target: {value: "20"}});
    expect(slider[0].value).toBe("20");
})

test('check max slider value is 100', () => {
    const sliderComponent = render(<Slider />);
    const slider = sliderComponent.queryAllByRole('slider');
    fireEvent.change(slider[0], {target: {value: "120"}});
    expect(slider[0].value).toBe("100");
})

test('check min slider value is 1', () => {
    const sliderComponent = render(<Slider />);
    const slider = sliderComponent.queryAllByRole('slider');
    fireEvent.change(slider[0], {target: {value: "0"}});
    expect(slider[0].value).toBe("1");
})
