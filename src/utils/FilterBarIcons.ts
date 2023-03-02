import BirthdayIcon from '../assets/bolo-de-aniversario.svg'
import WeddingIcon from '../assets/casamento.svg'
import CorporateIcon from '../assets/corporativo.svg'
import HappyHourIcon from '../assets/happyhour.svg'
import BaresIcon from '../assets/bares.svg'
import PianoIcon from '../assets/piano.svg'
import VozViolaoIcon from '../assets/voz-violao.svg'
import InfantilIcon from '../assets/infantil.svg'
import FestaJuninaIcon from '../assets/festa-junina.svg'
import ReveillonIcon from '../assets/reveillon.svg'
import ForaDaCaixaIcon from '../assets/fora-caixa.svg'
import GrandesEventosIcon from '../assets/grandes-eventos.svg'
import CarnavalIcon from '../assets/carnaval.svg'
import MariachiIcon from '../assets/mariachi.svg'
import CoversIcon from '../assets/cover.svg'
import Romantic from '../assets/romantico.svg'
import Autoral from '../assets/autoral.svg'
import Sertanejo from '../assets/cowboy.svg'
import DanceIcon from '../assets/Tango.svg'
import SignIcon from '../assets/sing.svg'
import RelaxIcon from '../assets/relax.svg'
import Sax from '../assets/sax.svg'
import { getUser, useAuth } from '../contexts/AuthContext'
import { parseCookies } from 'nookies'
const cookies = parseCookies()
const token = cookies.USER_ID_COOKIE_DATA_SESSION

export const filterBarIcons = [
  {
    tagId1: 101,
    tagId2: '',
    tagId3: '',
    title: 'Aniversário',
    icon: BirthdayIcon,
    isListAutomatic: false,
    filterType: 'or',
  },
  {
    tagId1: 111,
    tagId2: 115,
    tagId3: '',
    title: 'Casamento',
    icon: WeddingIcon,
    isListAutomatic: true,
    filterType: 'and',
  },
  {
    tagId1: 100,
    tagId2: '',
    tagId3: '',
    title: 'Corporativo',
    icon: CorporateIcon,
    isListAutomatic: false,
    filterType: 'or',
  },
  {
    tagId1: 107,
    tagId2: '',
    tagId3: '',
    title: 'Happy Hour',
    icon: HappyHourIcon,
    isListAutomatic: true,
    filterType: 'or',
  },
  {
    tagId1: 107,
    tagId2: '',
    tagId3: '',
    title: 'Bares',
    icon: BaresIcon,
    isListAutomatic: true,
    filterType: 'or',
  },
  {
    tagId1: 131,
    tagId2: '',
    tagId3: '',
    title: 'Piano',
    icon: PianoIcon,
    isListAutomatic: true,
    filterType: 'or',
  },
  {
    tagId1: 119,
    tagId2: 132,
    tagId3: '',
    title: 'Voz e Violão',
    icon: VozViolaoIcon,
    isListAutomatic: true,
    filterType: 'or',
  },
  {
    tagId1: 103,
    tagId2: 132,
    tagId3: '',
    title: 'Reveillón',
    icon: ReveillonIcon,
    isListAutomatic: false,
    filterType: 'or',
  },

  {
    tagId1: 104,
    tagId2: '',
    tagId3: '',
    title: 'Grandes Eventos',
    icon: GrandesEventosIcon,
    isListAutomatic: false,
    filterType: 'or',
  },

  // {
  //     title:'Mariachis',
  //     icon:MariachiIcon,
  // },
  {
    tagId1: 111,
    tagId2: 128,
    tagId3: '',
    title: 'Cover/Tributo',
    icon: CoversIcon,
    isListAutomatic: true,
    filterType: 'and',
  },
  {
    tagId1: 105,
    tagId2: '',
    tagId3: '',
    title: 'Carnaval',
    icon: CarnavalIcon,
    isListAutomatic: false,
    filterType: 'or',
  },
  {
    tagId1: 121,
    tagId2: 127,
    tagId3: 134,
    title: 'Romântico',
    icon: Romantic,
    isListAutomatic: true,
    filterType: 'or',
  },
  {
    tagId1: 111,
    tagId2: 130,
    tagId3: '',
    title: 'Sax/Sopro',
    icon: Sax,
    isListAutomatic: true,
    filterType: 'and',
  },
  {
    tagId1: 126,
    tagId2: '',
    tagId3: '',
    title: 'Músicas autorais',
    icon: Autoral,
    isListAutomatic: true,
    filterType: 'or',
  },
  {
    tagId1: 135,
    tagId2: '',
    tagId3: '',
    title: 'Infantil',
    icon: InfantilIcon,
    isListAutomatic: true,
    filterType: 'or',
  },
  {
    tagId1: 129,
    tagId2: 133,
    tagId3: '',
    title: 'Sertanejo Raiz',
    icon: Sertanejo,
    isListAutomatic: true,
    filterType: 'or',
  },
  {
    tagId1: 108,
    tagId2: 136,
    tagId3: '',
    title: 'Para dançar',
    icon: DanceIcon,
    isListAutomatic: true,
    filterType: 'or',
  },
  {
    tagId1: 109,
    tagId2: 136,
    tagId3: '',
    title: 'Para cantar junto',
    icon: SignIcon,
    isListAutomatic: true,
    filterType: 'or',
  },
  {
    tagId1: 110,
    tagId2: '',
    tagId3: '',
    title: 'Para relaxar',
    icon: RelaxIcon,
    isListAutomatic: true,
    filterType: 'or',
  },
]
