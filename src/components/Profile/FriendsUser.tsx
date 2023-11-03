import React from 'react'
import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import fakerData from "../../utils/faker";
import _ from "lodash";

const FriendsUser = () => {
  return (
    <div className="p-5 mt-5 md:mt-0 box intro-y">
        <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
            <div className="text-base font-medium truncate">
            Followers (102)
            </div>
        </div>
        <div>
            {_.take(fakerData, 5).map((faker, fakerKey) => (
            <div
                key={fakerKey}
                className="flex items-center pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0"
            >
                <div>
                <div className="w-16 h-16 image-fit">
                    <img
                    alt="Rocketman - HTML Admin Template"
                    className="rounded-full"
                    src={faker.photos[0]}
                    />
                </div>
                </div>
                <div className="flex flex-col w-full ml-5 2xl:items-center gap-y-3 2xl:flex-row">
                <div className="mr-auto">
                    <div className="flex items-center text-base font-medium">
                    <div className="whitespace-nowrap">
                        {faker.users[0].name}
                    </div>
                    <div className="mx-1.5">•</div>
                    <a href="" className="text-xs text-success">
                        Follow
                    </a>
                    </div>
                    <div className="mt-1 text-slate-500">
                    {faker.users[0].username}
                    </div>
                </div>
                <div className="flex">
                    <Button variant="outline-secondary" className="px-2 py-1">
                    <Lucide icon="UserCheck" className="w-4 h-4 mr-2" />{" "}
                    Friends
                    </Button>
                </div>
                </div>
            </div>
            ))}
        </div>
        <Button
            variant="outline-secondary"
            className="flex w-full mt-5 border-slate-200/60"
        >
            <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> View More
        </Button>
    </div>
  )
}

export default FriendsUser