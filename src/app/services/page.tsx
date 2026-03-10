import { redirect } from 'next/navigation';

export default function ServicesIndex() {
  // If someone tries to visit /services directly, redirect them to the homepage section
  redirect('/#services');
}
