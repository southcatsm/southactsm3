const pageConfig = {
  // 状态页面的标题，类似于HTML里面的<title></title>
  title: "Southcatsm博客 系统状态",
  // 状态页面右上角的按钮，按顺序从左往右在页面上排列
  links: [
	  // 这个是普通按钮
	  { link: 'https://github.com/southcatsm', label: 'Github'},
	  // 这个是显示成蓝色按钮的高光按钮
	  { link: 'https://southcat.cc', label: 'Blog', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    // ==========[服务监控]==========
    // 这是一个例子，用于监控一个网页
    // 如果是端口监控，可以参照原作者的Wiki
    {
	    // id必须唯一，使用英文和下划线
      id: 'scsm_mainmoni',
      // 监控页面展示的监控名称
      name: 'Southcatsm 博客主站',
      // 请求形式，HTTP请求一般用GET和POST，分不清就用GET
      method: 'GET',
      // 你监控的网站的地址
      target: 'https://southcat.cc',
      // 监控页面悬浮提示
      tooltip: 'Southcatsm 博客客',
      // 监控页面点击监控跳转链接
      statusPageLink: 'https://southcat.cc/',
    },
  ],
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
