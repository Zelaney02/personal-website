import { render, screen } from '@testing-library/react';
import App from './App';

describe('homepage', () => {
  test('renders the hero heading and tagline', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Jane He' })).toBeInTheDocument();
    expect(
      screen.getByText('Software engineer passionate about AI and human-computer interaction.')
    ).toBeInTheDocument();
  });

  test('renders the primary navigation with in-page anchors', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
  });

  test('renders every section heading', () => {
    render(<App />);
    ['Projects', 'Experience', 'Tech stack', 'Get in touch'].forEach((name) => {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument();
    });
  });

  test('renders three project cards and three experience entries', () => {
    render(<App />);
    expect(screen.getAllByRole('heading', { level: 3, name: '[Project name]' })).toHaveLength(3);
    expect(screen.getAllByRole('heading', { level: 3, name: '[Role] at [Company]' })).toHaveLength(3);
    expect(screen.getAllByRole('link', { name: /view on github/i })).toHaveLength(3);
  });

  test('has a skip link and accessible social links', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
    expect(screen.getByRole('link', { name: 'Jane He on GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Jane He on LinkedIn' })).toBeInTheDocument();
  });
});
