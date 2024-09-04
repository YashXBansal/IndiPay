
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/auth";
import ProfileContent from "../../../../packages/ui/src/ProfileContent";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return <ProfileContent session={session} />;
};

export default ProfilePage;
