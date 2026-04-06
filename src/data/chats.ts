export type ChatItem = {
  id: number
  name: string
  message: string
  time: string
  avatar?: string
  color: string
  unread?: number
  pinned?: boolean
  muted?: boolean
  active?: boolean
}

export const chats: ChatItem[] = [
  {
    id: 1,
    name: 'Anantha Sankari',
    message: 'Today at 11:38 am',
    time: '11:38',
    avatar: 'AS',
    color: '#7c5cff',
    active: true,
  },
  {
    id: 2,
    name: 'Evening skill Full stack',
    message: 'Andal.mentor: All certificates are mailed',
    time: 'Saturday',
    avatar: 'ES',
    color: '#ff8c42',
  },
  {
    id: 3,
    name: 'Vaishnavi Phone Fx',
    message: 'You reacted 😂 to: "Tommorow I am going to sun news"',
    time: 'Saturday',
    avatar: 'VP',
    color: '#4f9d69',
  },
  {
    id: 4,
    name: 'Andal.mentor S',
    message: 'Thank you mam',
    time: 'Saturday',
    avatar: 'AM',
    color: '#d14d72',
  },
  {
    id: 5,
    name: 'RECCSAR AI AGENTS SDP 1 19-3-26',
    message: 'Reccsar Private Limited: Join Our Internship Program!',
    time: 'Saturday',
    avatar: 'RA',
    color: '#219ebc',
    unread: 4,
  },
  {
    id: 6,
    name: 'RECCSAR AI AGENTS SDP 2 19-3-26',
    message: '+91 866 708 0142 joined via an invite link',
    time: 'Saturday',
    avatar: 'RA',
    color: '#577590',
  },
  {
    id: 7,
    name: 'RECCSAR GIT WORKSHOP 2 - 29-03-26',
    message: 'Reccsar Private Limited: Join Our Internship Program!',
    time: 'Saturday',
    avatar: 'RG',
    color: '#2a9d8f',
    unread: 2,
  },
  {
    id: 8,
    name: 'Andal Mentor Team',
    message: 'Session link shared. Please join on time.',
    time: 'Friday',
    avatar: 'AT',
    color: '#f4a261',
    pinned: true,
  },
  {
    id: 9,
    name: 'Frontend Batch April',
    message: 'Assignment deadline moved to Monday morning.',
    time: 'Friday',
    avatar: 'FB',
    color: '#264653',
  },
  {
    id: 10,
    name: 'Nivetha UI Practice',
    message: 'Can you review the landing page once?',
    time: 'Friday',
    avatar: 'NP',
    color: '#e76f51',
    unread: 1,
  },
  {
    id: 11,
    name: 'Daily Standup',
    message: 'You: Pushed the latest fixes to the repo.',
    time: 'Thursday',
    avatar: 'DS',
    color: '#118ab2',
    muted: true,
  },
  {
    id: 12,
    name: 'Placement Updates 2026',
    message: 'Interview round details will be shared shortly.',
    time: 'Thursday',
    avatar: 'PU',
    color: '#8338ec',
  },
  {
    id: 13,
    name: 'Muthu Sir',
    message: 'Please send the attendance sheet.',
    time: 'Thursday',
    avatar: 'MS',
    color: '#3a86ff',
  },
  {
    id: 14,
    name: 'UI/UX Workshop',
    message: 'Certificate distribution starts tomorrow.',
    time: 'Wednesday',
    avatar: 'UW',
    color: '#06d6a0',
  },
  {
    id: 15,
    name: 'Project Review Group',
    message: 'Need the final PPT before 5 PM.',
    time: 'Wednesday',
    avatar: 'PR',
    color: '#ef476f',
    unread: 6,
  },
  {
    id: 16,
    name: 'Madurai Travel Plan',
    message: 'Bus timing confirmed for 6:30 AM.',
    time: 'Tuesday',
    avatar: 'MT',
    color: '#8d99ae',
  },
]
