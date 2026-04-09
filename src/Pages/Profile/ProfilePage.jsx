import ProfileBanner from './Components/ProfileBanner'
import ProfileDetails from './Components/ProfileDetails'
import ProfileNotifications from './Components/ProfileNotifications'
import ProfileProjects from './Components/ProfileProjects'

function ProfilePage() {
  return (
    <div className="space-y-5">
      <ProfileBanner />
      <div className="grid gap-5 xl:grid-cols-[1.05fr_1.25fr_0.9fr]">
        <ProfileProjects />
        <ProfileDetails />
        <ProfileNotifications />
      </div>
    </div>
  )
}

export default ProfilePage
