import { Footer } from '../model/footer';
import { Header } from '../model/header';

export const pageHeader: Header = {
  title: 'Music Shop',
  homeIcon: 'home',
  profileName: 'Elad Cohen',
  isMobile: true,
  menuIcon: 'menu',
};

export const pageFooter: Footer = {
  contactUs: {
    email: 'eladcohen1978.gmail.com',
    whatsUp: {
      href: 'https://www.flaticon.com/free-icons/whatsapp',
      iconSrc: '../../../assets/images/whatsapp-logo.png',
      title: 'whatsapp icons',
      content: 'Whatsapp',
    },
    faceBook: {
      href: 'https://www.flaticon.com/free-icons/whatsapp',
      iconSrc: '../../../assets/images/facebook.png',
      title: 'faceBook icons',
      content: 'facebook',
    },
    phoneNum: '03-5490346',
  },
  copyWrite: 'CopyWrite to EC-webD ',
};
