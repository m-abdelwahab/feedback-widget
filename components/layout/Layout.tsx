import {
  GearIcon,
  BarChartIcon,
  GlobeIcon,
  PersonIcon,
  HomeIcon,
} from '@radix-ui/react-icons';
import cx from 'classnames';
import { Feedback } from 'components/Feedback';
import { Button } from 'components/shared';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Projects', href: '/projects', icon: GlobeIcon },
  { name: 'Analytics', href: '/analytics', icon: BarChartIcon },
  {
    name: 'Workspace',
    href: '/settings/workspace',
    icon: GearIcon,
  },
];

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <div>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-3 pb-5  md:px-8">
        <div>
          <Link href="/">
            <a className="dark:focus:ring-violet-dark-700 dark:ring-offset-gray-dark-100 flex flex-shrink-0 items-center rounded-md p-2 focus:outline-none  focus:ring-2 focus:ring-violet-700 focus:ring-offset-2">
              <svg
                className="h-6 w-6"
                viewBox="0 0 172 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.76 172C6.16056 172 0 165.839 0 158.24L-6.91689e-06 13.76C-7.24907e-06 6.16055 6.16055 0 13.76 0L158.24 -6.91689e-06C165.839 -7.24907e-06 172 6.16056 172 13.76V26.8174C172 26.998 171.782 27.0885 171.654 26.9608V26.9608C171.575 26.8816 171.446 26.8816 171.367 26.9608L27.0108 171.317C26.9254 171.403 26.9254 171.541 27.0108 171.627V171.627C27.1487 171.764 27.0511 172 26.8561 172H13.76ZM59.1244 164.659C56.4155 167.368 58.334 172 62.1649 172H99.3913C100.532 172 101.625 171.547 102.432 170.741L170.741 102.432C171.547 101.625 172 100.532 172 99.3913V62.1649C172 58.334 167.368 56.4155 164.659 59.1243L59.1244 164.659ZM137.009 172C133.179 172 131.26 167.368 133.969 164.659L164.659 133.969C167.368 131.26 172 133.179 172 137.009V158.24C172 165.839 165.839 172 158.24 172H137.009Z"
                  fill="#5842C3"
                />
              </svg>
            </a>
          </Link>
        </div>

        <div className="dark:text-gray-dark-1100 text-gray-1100 flex items-center space-x-5">
          <div>
            <Feedback />
          </div>

          <Link href="/">
            <a
              className={cx(
                ' dark:hover:bg-gray-dark-300 dark:hover:text-gray-dark-1200 hover:text-gray-1200 hover:bg-gray-200',
                'dark:focus:ring-violet-dark-700 dark:ring-offset-gray-dark-100 group flex items-center rounded-md p-2 text-sm font-medium focus:outline-none focus:ring-2  focus:ring-violet-700 focus:ring-offset-2'
              )}
            >
              Changelog
            </a>
          </Link>

          <PersonIcon
            className="dark:text-gray-dark-1100 dark:bg-gray-dark-200 text-gray-1100 h-7 w-7 rounded-full bg-gray-200 p-1"
            aria-hidden="true"
          />
        </div>
      </header>
      <div className="dark:bg-gray-dark-100 dark:border-gray-dark-300 sticky top-0 z-10 border-b border-gray-300 ">
        <nav className="mx-auto flex max-w-7xl space-x-5 px-4 py-3 md:px-8 flex-wrap items-center justify-center sm:justify-start">
          {navigation.map((item) => (
            <Link href={item.href} key={item.name}>
              <a
                className={cx(
                  router.pathname == item.href
                    ? 'dark:bg-violet-dark-300 dark:text-violet-dark-1200 text-violet-1200 bg-gray-300'
                    : 'dark:text-gray-dark-1100 dark:hover:bg-gray-dark-300 dark:hover:text-gray-dark-1200 text-gray-1100 hover:text-gray-1200 hover:bg-gray-300',
                  'dark:focus:ring-violet-dark-700 group flex items-center rounded-md p-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-violet-700  focus:ring-offset-2',
                  'dark:ring-offset-gray-dark-100'
                )}
              >
                <item.icon
                  className={cx(
                    router.pathname == item.href
                      ? 'dark:text-gray-dark-1200 text-gray-1200'
                      : 'dark:text-gray-dark-1100 dark:group-hover:text-gray-dark-1200 text-gray-1100 group-hover:text-gray-1200',
                    'mr-2.5 h-4 w-4 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
      <main className="relative bg-gray-50 h-screen">
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-1100">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-400" />
              </div>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
};
