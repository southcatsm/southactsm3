const pageConfig = {
  // Title for your status page
  title: "Southcatsm's 系统状态",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/southcatsm', label: 'GitHub' },
    { link: 'https://southcat.cc', label: 'Blog' },
    { link: 'mailto:archie26@qq.com', label: 'Email Me', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    "🌐 Public (example group name)": ['foo_monitor', 'bar_monitor', 'more monitor ids...'],
    "🔐 Private": ['test_tcp_monitor'],
  },
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
          id: 'weblog',
          name: '主站',
          method: 'POST',
          target: 'https://southcat.cc',
          tooltip: 'southcatsm主站',
          statusPageLink: 'https://southcat.cc',
          expectedCodes: [200],
          timeout: 10000,
          headers: {
            'User-Agent': 'Uptimeflare 114514',
          },
    },
	{
	      id: 'weblog2',
	      name: 'Beta测试站',
	      method: 'POST',
	      target: 'https://demo3.southcat.cc',
	      tooltip: 'southcatsm预先测试站',
	      statusPageLink: 'https://demo3.southcat.cc',
	      expectedCodes: [200],
	      timeout: 10000,
	      headers: {
	        'User-Agent': 'Uptimeflare 114514',
	      },
	},
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
