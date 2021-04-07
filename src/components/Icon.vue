<template>
    <component class="flag-icon" v-bind:is="name" />
</template>

<script>
import Agenda from '../../public/img/svg/agenda.svg';
import AngleDown from '../../public/img/svg/angle_down.svg';
import AutobusSide from '../../public/img/svg/autobus_side.svg';
import Autobus from '../../public/img/svg/autobus.svg';
import Checkmark from '../../public/img/svg/checkmark.svg';
import Clock from '../../public/img/svg/clock.svg';
import Clock2 from '../../public/img/svg/clock_2.svg';
import Close from '../../public/img/svg/close.svg';
import Dress from '../../public/img/svg/dress.svg';
import Edit from '../../public/img/svg/edit.svg';
import ExternalLink from '../../public/img/svg/external_link.svg';
import HeartFull from '../../public/img/svg/heart_full.svg';
import HeartOutline from '../../public/img/svg/heart_outline.svg';
import InfoHelp from '../../public/img/svg/info_help.svg';
import Key from '../../public/img/svg/key.svg';
import Key2 from '../../public/img/svg/key_2.svg';
import Key3 from '../../public/img/svg/key_3.svg';
import Key4 from '../../public/img/svg/key_4.svg';
import LogoAirbnb from '../../public/img/svg/logo_airbnb.svg';
import LogoBooking from '../../public/img/svg/logo_booking.svg';
import LogoTripadvisor from '../../public/img/svg/logo_tripadvisor.svg';
import Lock from '../../public/img/svg/lock.svg';
import Mail from '../../public/img/svg/mail.svg';
import MapMarker from '../../public/img/svg/map_marker.svg';
import Navigation from '../../public/img/svg/navigation.svg';
import Password from '../../public/img/svg/password.svg';
import Smartphone from '../../public/img/svg/smartphone.svg';
import TitleGetTogether from '../../public/img/svg/title_get_together.svg';
import TitleHochzeitsfeier from '../../public/img/svg/title_hochzeitsfeier.svg';
import TitleInfos from '../../public/img/svg/title_infos.svg';
import TitleSarahMaxi from '../../public/img/svg/title_sarah_maxi.svg';
import UserMale from '../../public/img/svg/user_male.svg';
import User from '../../public/img/svg/user.svg';
import Weblink from '../../public/img/svg/web_link.svg';
import Wireframe from '../../public/img/svg/wireframe.svg';

export default {
  name: 'Icon',
  props: {
    name: String,
  },
  components: {
    Agenda,
    AngleDown,
    AutobusSide,
    Autobus,
    Checkmark,
    Clock,
    Clock2,
    Close,
    Dress,
    Edit,
    ExternalLink,
    HeartFull,
    HeartOutline,
    InfoHelp,
    Key,
    Key2,
    Key3,
    Key4,
    LogoAirbnb,
    LogoBooking,
    LogoTripadvisor,
    Lock,
    Mail,
    MapMarker,
    Navigation,
    Password,
    Smartphone,
    TitleGetTogether,
    TitleHochzeitsfeier,
    TitleInfos,
    TitleSarahMaxi,
    UserMale,
    User,
    Weblink,
    Wireframe,
  },
};
</script>

<style scoped lang="scss">
svg {
  fill: currentColor;
}
</style>
