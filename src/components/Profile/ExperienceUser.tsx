import React from 'react'
import Button from '../../base-components/Button'
import Lucide from "../../base-components/Lucide";

const ExperienceUser = () => {
  return (
    <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Experience</div>
              <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div>
              <div className="flex pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0">
                <div className="mr-5">
                  <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                    SU
                  </div>
                </div>
                <div>
                  <div className="text-base font-medium">Left4code Express</div>
                  <div className="mt-1 text-slate-500">
                    Senior Frontend Engineer
                  </div>
                  <div className="mt-1">2005 - 2009 • 4 yrs</div>
                  <ul className="mt-5 -ml-16 list-disc sm:mt-3 sm:ml-3">
                    <li className="mb-1 last:mb-0">
                      Work across the full stack, building highly scalable
                      distributed solutions that enable positive user
                      experiences and measurable business growth.
                    </li>
                    <li className="mb-1 last:mb-0">
                      Develop new features and infrastructure development in
                      support of rapidly emerging business and project
                      requirements.
                    </li>
                    <li className="mb-1 last:mb-0">
                      Assume leadership of new projects from conceptualization
                      to deployment.
                    </li>
                    <li className="mb-1 last:mb-0">
                      Ensure application performance, uptime, and scale,
                      maintaining high standards of code quality and thoughtful
                      application design.
                    </li>
                    <li className="mb-1 last:mb-0">
                      Work with agile development methodologies, adhering to
                      best practices and pursuing continued learning
                      opportunities.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0">
                <div className="mr-5">
                  <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                    UO
                  </div>
                </div>
                <div>
                  <div className="text-base font-medium">Freelancer</div>
                  <div className="mt-1 text-slate-500">Fullstack Engineer</div>
                  <div className="mt-1">2010 - 2014 • 4 yrs</div>
                  <ul className="mt-5 -ml-16 list-disc sm:mt-3 sm:ml-3">
                    <li className="mb-1 last:mb-0">
                      Participate in all aspects of agile software development
                      including design, implementation, and deployment
                    </li>
                    <li className="mb-1 last:mb-0">
                      Architect and provide guidance on building end-to-end
                      systems optimized for speed and scale
                    </li>
                    <li className="mb-1 last:mb-0">
                      Work primarily in Ruby, Java/JRuby, React, and JavaScript
                    </li>
                    <li className="mb-1 last:mb-0">
                      Engage with inspiring designers and front end engineers,
                      and collaborate with leading back end engineers as we
                      create reliable APIs
                    </li>
                    <li className="mb-1 last:mb-0">
                      Collaborate across time zones via Slack, GitHub comments,
                      documents, and frequent video conferences
                    </li>
                  </ul>
                </div>
              </div>
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

export default ExperienceUser