import LayoutHCF from '../../common/Layouts/LayoutHCF'

export interface IPageWelcomeProps {}

/**
 * Dashboard page.
 */
export function PageDashboard(props: IPageWelcomeProps) {
  return (
    <LayoutHCF
      name="PageDiscovery"
      body={{
        variants: ['page'],
        node: (
          <LayoutHCF
            name="PageDiscovery"
            body={{
              variants: ['pageContent'],
              node: <p>This is the dashboard page.</p>
            }}
          />
        )
      }}
    />
  )
}

export default PageDashboard
