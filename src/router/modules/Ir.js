/** When your routing table is too long, you can split it into small modules **/

import Layout from "@/layout";

const IrRouter = {
  path: "incident_reports",
  component: Layout,
  redirect: "/incident_reports/recieved",
  //  alwaysShow: true, // will always show the root menu
  name: "Incident Reports",
  meta: {
    title: "Incident Reports",
    icon: "documentation",
    roles: ["Admin", "HR Manager", "HR Assistant"]
  },
  children: [
    {
      path: "/incident_reports/receive",
      component: () => import("@/views/incident_reports/receive"),
      name: "Receive",
      meta: {
        title: "Receive",
        roles: ["Admin", "HR Manager", "HR Assistant","Finance Officer","Team Leader","Operations Manager","RTA Supervisor", "RTA Manager","QA Supervisor","T & Q Manager","IT Supervisor"]
      }
    },
    {
      path: "/incident_reports/issue",
      component: () => import("@/views/incident_reports/issue"),
      name: "Issue",
      meta: {
        title: "Issue",
        roles: ["Admin", "HR Manager", "HR Assistant","Finance Officer","Team Leader","Operations Manager","RTA Supervisor", "RTA Manager","QA Supervisor","T & Q Manager","IT Supervisor"]
      }
    },
    {
      path: "/incident_reports/all",
      component: () => import("@/views/incident_reports/all"),
      name: "All",
      meta: {
        title: "All"
      }
    },
    {
      path: "/incident_reports/sanction",
      name: "Sanction",
      redirect: "incident_reports/sanction/type",
      component: () => import("@/views/incident_reports/sanction/index"),
      meta: {
        title: "Sanction"
      },
      children: [
        {
          path: "/incident_reports/sanction/type",
          component: () =>
            import("@/views/incident_reports/sanction/type/index"),
          name: "Type",
          meta: {
            title: "Type"
          }
        },
        {
          path: "/incident_reports/sanction/level",
          component: () =>
            import("@/views/incident_reports/sanction/level/index"),
          name: "Level",
          meta: {
            title: "Level"
          }
        }
      ]
    }
  ]
};

export default IrRouter;
