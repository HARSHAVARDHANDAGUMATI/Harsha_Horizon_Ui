import { simulateRequest } from './api'

const dashboardPayload = {
  stats: [
    { id: 'earnings', label: 'Earnings', value: '$350.4', trend: '', accent: 'chart' },
    { id: 'spend', label: 'Spend this month', value: '$642.39', trend: '', accent: 'document' },
    { id: 'sales', label: 'Sales', value: '$574.34', trend: '+23% vs last month', accent: 'wallet' },
    { id: 'balance', label: 'Your balance', value: '$1,000', trend: '', accent: 'flag' },
    { id: 'tasks', label: 'New Tasks', value: '154', trend: '', accent: 'task' },
    { id: 'projects', label: 'Total Projects', value: '2935', trend: '', accent: 'home' },
  ],
  revenueSeries: [30, 25, 34, 51, 42, 72, 60, 86, 68, 94, 90, 112],
  balanceSeries: [17, 18, 19, 20, 21, 22, 23, 24, 25],
  trafficBreakdown: [
    { label: 'Your files', value: 63, color: '#4318ff' },
    { label: 'System', value: 25, color: '#6ad2ff' },
    { label: 'Other', value: 12, color: '#eff4fb' },
  ],
  checkItems: [
    { name: 'Horizon UI PRO', progress: '17.5%', quantity: '2.458', date: '24.Jan.2021' },
    { name: 'Horizon UI Free', progress: '10.8%', quantity: '1.485', date: '12.Jun.2021' },
    { name: 'Weekly Update', progress: '21.3%', quantity: '1.024', date: '5.Jan.2021' },
    { name: 'Venus 3D Asset', progress: '31.5%', quantity: '858', date: '7.Mar.2021' },
    { name: 'Marketplace', progress: '12.2%', quantity: '258', date: '17.Dec.2021' },
  ],
  complexItems: [
    { name: 'Horizon UI PRO', status: 'Approved', date: '18 Apr 2021', value: '72%' },
    { name: 'Horizon UI Free', status: 'Disable', date: '18 Apr 2021', value: '38%' },
    { name: 'Marketplace', status: 'Error', date: '20 May 2021', value: '81%' },
    { name: 'Weekly Updates', status: 'Approved', date: '12 Jul 2021', value: '56%' },
  ],
  tasks: [
    'Landing Page Design',
    'Dashboard Builder',
    'Mobile App Design',
    'Illustrations',
    'Promotional LP',
  ],
  activity: [
    { id: 1, title: 'New lesson is available', description: 'What do you need to know to create better products?', time: '85 mins' },
  ],
  team: [
    { id: 1, name: 'Adela Parkson', role: 'Creative Director' },
    { id: 2, name: 'Christian Mad', role: 'Product Designer' },
    { id: 3, name: 'Jason Statham', role: 'Junior Graphic Designer' },
  ],
}

export const dashboardService = {
  getDashboardData() {
    return simulateRequest(dashboardPayload)
  },
}
