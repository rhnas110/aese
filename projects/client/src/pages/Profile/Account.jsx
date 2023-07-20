import { useContext } from "react";

import { AuthContext } from "../../context/Auth";
import { SideProfile } from "../../components/Fragments/Profile/SideProfile";
import { HeadProfile } from "../../components/Fragments/Profile/HeadProfile";
import { Account as AccountLayout } from "../../components/Layouts/Profile/Account";
import { SkeletonAccountProfile } from "../../components/Layouts/Skeleton/SkeletonAccountProfile";

export const Account = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="w-full bg-white ">
      <div className="max-w-[1240px] pt-6 md:py-12 md:px-4 px-2 mx-auto h-screen">
        <HeadProfile nickname={auth?.profile?.nickname} />
        {auth?.profile ? (
          <div className="grid md:grid-cols-[20%_auto] gap-8 md:h-[80vh] h-[86vh]">
            <SideProfile nickname={auth?.profile?.nickname} />
            <AccountLayout userInformation={auth} />
          </div>
        ) : (
          <SkeletonAccountProfile />
        )}
      </div>
    </div>
  );
};
