import { test } from 'vitest'
import { render } from '@testing-library/react'
import JobCard from './JobCard'

test('renders without crashing', () => {
  const job = {
    image: { src: 'image.jpg', alt: 'job image' },
    company: 'Google',
    title: 'Software Engineer',
    salary: '100k',
    location: 'New York',
    postDate: '2022-06-20',
  };

  render(<JobCard job={job} />);
});
