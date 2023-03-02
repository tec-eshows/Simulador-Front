import CowboyIcon from '../assets/cowboy.svg'
import RockIcon from './../assets/rock.svg'
import SambaIcon from './../assets/samba.svg'
import PandeiroIcon from './../assets/pandeiro.svg'
import ForroIcon from './../assets/forro.svg'
import MpbIcon from './../assets/mpb.svg'
import AxeIcon from './../assets/axe.svg'
import EletronicIcon from './../assets/eletronica.svg'
import AniversarioIcon from './../assets/aniversarioo.svg'
import GospelIcon from './../assets/gospel.svg'
import ClassicaIcon from './../assets/musica-classica.svg'
import Infantil from './../assets/infantil.svg'
import Dj from './../assets/dj.svg'
import Alternativo from './../assets/Alternativo.svg'
import Pop from './../assets/pop.svg'
import Ritmos from './../assets/ritmos-variados.svg'
import Soul from './../assets/Soul.svg'
import Pagode from './../assets/pagode.svg'
import Carnaval from './../assets/carnaval.svg'
import Country from './../assets/country.svg'
import Folk from './../assets/folk.svg'
import Frevo from './../assets/frevo.svg'
import Tango from './../assets/Tango.svg'
import Jazz from './../assets/Jazz.svg'
import Humor from './../assets/Humor.svg'
import Cover from './../assets/cover.svg'
import BandaIcon from './../assets/banda.svg'
export function handleStyleIcon(styleName) {
  const stylesIcons = {
    Sertanejo: CowboyIcon,
    Samba: PandeiroIcon,
    Rock: RockIcon,
    Forró: ForroIcon,
    Mpb: MpbIcon,
    icon: MpbIcon,
    Axé: AxeIcon,
    Eletrônica: EletronicIcon,
    Aniversário: AniversarioIcon,
    Gospel: GospelIcon,
    'Música Clássica': ClassicaIcon,
    'Músicas para Crianças': Infantil,
    RAP: Dj,
    Reggae: Alternativo,
    Pop,
    'Músicas Internacionais': Ritmos,
    Soul,
    Pagode,
    'Sertanejo Universitário': CowboyIcon,
    Carnaval,
    Country,
    Folk,
    Frevo,
    'Pop Rock': RockIcon,
    Salsa: Tango,
    Tango,
    'Ritmos Variados': Ritmos,
    'Black Music': Dj,
    Blues: Jazz,
    Jazz,
    'Indie/Alternativo': Alternativo,
    Humor,
    DJ: Dj,
    'Cover/Tributo': Cover,
    Funk: Dj,
    'Banda Baile': BandaIcon,
  }
  return stylesIcons[styleName] || MpbIcon
}
