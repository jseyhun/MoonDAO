import {
  HomeIcon,
  LockClosedIcon,
  BuildingLibraryIcon,
  RocketLaunchIcon,
  BellIcon,
  ChartBarSquareIcon,
  FolderIcon,
  CalendarDaysIcon,
  WalletIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'

export const navigation = [
  {
    name: 'home',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'Join MoonDAO',
    href: '/onboarding',
    icon: PlusIcon,
  },
  {
    name: 'Governance',
    href: '/governance',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Marketplace',
    icon: RocketLaunchIcon,
    children: [
      { name: 'ZeroG', href: '/zero-g' },
      { name: 'Lifeship', href: '/lifeship' },
      { name: 'Sweepstakes', href: '/ticket2space' },
      { name: 'Digital Assets', href: 'https://market.moondao.com' },
    ],
  },
  {
    name: 'Links',
    icon: FolderIcon,
    children: [
      { name: 'Homepage', href: 'https://moondao.com/' },
      { name: 'Snapshot', href: 'https://snapshot.org/#/tomoondao.eth' },
      { name: 'Documentation', href: 'https://moondao.com/docs/introduction' },
      { name: 'Newsletter', href: 'https://moondao.ck.page/profile' },
      { name: 'Events', href: '/events' },
      { name: 'Analytics', href: '/analytics' },
    ],
  },

]
