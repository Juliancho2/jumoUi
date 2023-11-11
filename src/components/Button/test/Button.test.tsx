import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';
import { ButtonVariant } from '../constants/enumsButton';

describe('Button Component', () => {
  beforeEach(() => {
    render(<Button>Default</Button>);
  });
  test('render a button', () => {
    const button = screen.getByText('Default');
    expect(button).toBeDefined();
  });
  test('renders a button with secondary variant', () => {
    const { container } = render(<Button variant={ButtonVariant.secondary}>Secondary</Button>);
    expect(container.getElementsByClassName('bg-[#A482EE]').length).toBe(1);
  });
  test('renders a button with primary variant', () => {
    const { container } = render(<Button variant={ButtonVariant.primary}>Primary</Button>);
    expect(container.getElementsByClassName('bg-[#C4E443]').length).toBe(1);
  });
  test('renders a button with neutral variant', () => {
    const { container } = render(<Button variant={ButtonVariant.neutral}>Neutral</Button>);
    expect(container.getElementsByClassName('bg-[#1D232B]').length).toBe(1);
  });
  test('should call a function with click', () => {
    const mockupFn = vi.fn();
    render(<Button onClick={mockupFn}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(mockupFn).toHaveBeenCalled();
  });
});
