import { Navbar } from '@shared/interface/navbar';
import { Card } from '@shared/interface/card';
import { LabelDescription } from '@shared/interface/label-description';

export const navbar: Navbar[] = [
  { label: 'Empresa', url: '' },
  { label: 'Clientes', url: '' },
  { label: 'Serviços', url: '' },
  { label: 'Contato', url: '' },
];

export const cards: Card[] = [
  { title: 'Front-End', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: '/assets/img/frontend.jpg', link: '' },
  { title: 'Mobile', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: '/assets/img/mobile.jpg', link: '' },
  { title: 'Back-End', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: '/assets/img/backend.jpg', link: '' },
];

export const contact: LabelDescription[] = [
  { label: 'Endereço', description: 'Av. Paulista, 302' },
  { label: 'Site', description: 'www.developer.com.br' },
  { label: 'E-mail', description: 'developer@dev.com.br' },
  { label: 'Telefone', description: '(11) 2727-3030' },
];
