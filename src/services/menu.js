export async function getLeftMenuData() {
  return [
    {
      title: 'Security Cameras',
      key: 'youtube',
      icon: 'icmn icmn-youtube',
      children: [
        {
          title: 'Camera Feeds',
          key: 'youtubeFeed',
          url: '/youtube/feed',
        },
        {
          title: 'View Cameras',
          key: 'youtubeView',
          url: '/youtube/view',
        },
      ],
    },
    {
      divider: true,
    },
    {
      title: 'Settings',
      key: 'settings',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
    },
    {
      divider: true,
    },
  ]
}
export async function getTopMenuData() {
  return [
    {
      title: 'Security Cameras',
      key: 'youtube',
      icon: 'icmn icmn-youtube',
      children: [
        {
          title: 'Camera Feeds',
          key: 'youtubeFeed',
          url: '/youtube/feed',
        },
        {
          title: 'View Cameras',
          key: 'youtubeView',
          url: '/youtube/view',
        },
      ],
    },
    {
      title: 'Settings',
      key: 'settings',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
    },
  ]
}
