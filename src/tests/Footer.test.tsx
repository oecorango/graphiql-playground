import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Footer } from '../components/Footer';
import { BrowserRouter } from 'react-router-dom';

describe('Footer component', () => {
  it('renders RsSchoolSvg with link to Rs School website', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  it('renders GitSvg with link to GitHub repository', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  it('displays the correct year in the footer', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
});
