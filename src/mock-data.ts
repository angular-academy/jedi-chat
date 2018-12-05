import { Item } from './app/chat/models/item.model';
import {Fraction, User} from './app/shared/models/user.model';

export const DEMO_USERS: User[] = [{
  nickName: 'General Grievous',
  avatar: '/assets/grievous.jpg',
  bio: 'Der Kaleesh-Cyborg Grievous war ein großer Kriegsherr und General der großen Droidenarmee der Konföderation unabhängiger Systeme zu Zeiten der Klonkriege. Im Laufe des Krieges verwendete Grievous mehrere Flaggschiffe, darunter die Malevolence und die Unsichtbare Hand. Viele seiner Flaggschiffe wurden zerstört - so auch die Skytop-Station. Grievous hatte auf Vassek ein Geheimversteck, in dem sein Wartungsdroide EV-A4-D und sein Roggwart Gor lebten. Er hatte sogar seine eigene Elite, die IG-100-MagnaWachen.',
  gender: 'MALE',
  species: 'KALEESH',
  fraction: 'CONFEDERACY_OF_INDEPENDENT_SYSTEMS',
}, {
  nickName: 'Anakin Skywalker',
  avatar: '/assets/anakin.jpg',
  bio: 'Anakin Skywalker, später unter dem Namen Darth Vader bekannt, war der Sohn von Shmi Skywalker, der Ehemann von Padmé Amidala und der Vater von Luke Skywalker und Leia Organa. Entdeckt wurde er von Qui-Gon Jinn auf dem Wüstenplaneten Tatooine und nach dessen Tod wurde er von Obi-Wan Kenobi zum Jedi ausgebildet. Er galt als der Auserwählte, der nach einer alten Prophezeiung der Macht das Gleichgewicht zurückgeben würde. In den Klonkriegen war er einer der geschicktesten und berühmtesten Jedi-Ritter, und einer der besten Piloten der Galaxis sowie ein Jedi-General der Klonkrieger, welcher in der gesamten Galaxis als Held galt.',
  gender: 'MALE',
  species: 'HUMAN',
  fraction: 'GALACTIC_REPUBLIC',
}, {
  nickName: 'Obi-Wan Kenobi:',
  avatar: '/assets/obiwan.jpg',
  bio: 'Obi-Wan Kenobi, oder später Ben Kenobi, war ein Jedi-Meister des Alten Ordens, der im Laufe seines Lebens die Geschichte der Galaxis und des Jedi-Ordens maßgeblich prägte. Der besonnene und ruhige Jedi zeichnete sich durch ein gutes diplomatisches Gespür aus und wurde in Kriegszeiten als ein fähiger Unterhändler bekannt. Darüber hinaus war er ein Meister sowohl im Umgang mit der Macht als auch dem Lichtschwert, und trotz seiner Abneigung gegen das Fliegen, ein exzellenter Pilot.',
  gender: 'MALE',
  species: 'HUMAN',
  fraction: 'GALACTIC_REPUBLIC',
}];

export const DEMO_ITEMS: Item[] = [{
  message: 'Bei jemandem mit deinem Ruf hätte ich erwartet, dass du ein wenig älter wärst.',
  author: DEMO_USERS[0],
  date: new Date(2018, 11, 2, 18, 45),
}, {
  message: 'General Grievous, Ihr seid kleiner als ich erwartet hätte.',
  author: DEMO_USERS[1],
  date: new Date(2018, 11, 2, 18, 46),
}, {
  message: 'Jedi-Abschaum!',
  author: DEMO_USERS[0],
  date: new Date(2018, 11, 2, 18, 47),
}, {
  message: 'Wir haben etwas zu erledigen, Anakin. Du solltest ihn nicht provozieren.',
  author: DEMO_USERS[2],
  date: new Date(2018, 11, 2, 18, 48),
}];
