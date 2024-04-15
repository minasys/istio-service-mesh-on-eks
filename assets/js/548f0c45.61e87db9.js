"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[6104],{1696:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(4848),r=i(8453);const s={title:"Overview",sidebar_position:10,weight:5},a=void 0,o={id:"traffic-management/overview",title:"Overview",description:"In the dynamic environment of microservices, managing traffic effectively is critical to ensuring reliability, performance, and the successful rollout of new features. Istio provides a suite of traffic management capabilities that give you fine-grained control over service interactions, all without changing any application code.",source:"@site/docs/20-traffic-management/10-overview.md",sourceDirName:"20-traffic-management",slug:"/traffic-management/overview",permalink:"/docs/traffic-management/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/20-traffic-management/10-overview.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Overview",sidebar_position:10,weight:5},sidebar:"trafficManagementSidebar",next:{title:"Exposing a service with ISTIO Ingress Gateway",permalink:"/docs/traffic-management/expose_a_service"}},c={},l=[{value:"Advantages of using ISTIO for traffic management:",id:"advantages-of-using-istio-for-traffic-management",level:2},{value:"ISTIO Traffic Management API Resources:",id:"istio-traffic-management-api-resources",level:2},{value:"Gateway",id:"gateway",level:3},{value:"VirtualService",id:"virtualservice",level:3},{value:"DestinationRule",id:"destinationrule",level:3},{value:"ServiceEntry",id:"serviceentry",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In the dynamic environment of microservices, managing traffic effectively is critical to ensuring reliability, performance, and the successful rollout of new features. Istio provides a suite of traffic management capabilities that give you fine-grained control over service interactions, all without changing any application code."}),"\n",(0,t.jsx)(n.h2,{id:"advantages-of-using-istio-for-traffic-management",children:"Advantages of using ISTIO for traffic management:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Understanding how various services on the network interact with each other."}),"\n",(0,t.jsx)(n.li,{children:"Ability to Inspect traffic between services."}),"\n",(0,t.jsx)(n.li,{children:"Percentage-based routing with granular policies."}),"\n",(0,t.jsx)(n.li,{children:"Thousands of services' policies can be automated."}),"\n",(0,t.jsx)(n.li,{children:"Decouple the network from your application code."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"istio-traffic-management-api-resources",children:"ISTIO Traffic Management API Resources:"}),"\n",(0,t.jsx)(n.p,{children:"You might want to direct a particular percentage of traffic to a new version of a service as part of A/B testing, or apply a different load balancing policy to traffic for a particular subset of service instances. You might also want to apply special rules to traffic coming into or out of your mesh, or add an external dependency of your mesh to the service registry. You can do all this and more by adding your own traffic configuration to Istio using Istio\u2019s traffic management API."}),"\n",(0,t.jsx)(n.p,{children:"API is specified using Kubernetes custom resource definitions (CRDs), which you can configure using YAML, as you\u2019ll see in the coming sections of this chapter."}),"\n",(0,t.jsx)(n.p,{children:"These custom resources are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Gateways"}),"\n",(0,t.jsx)(n.li,{children:"Virtual services"}),"\n",(0,t.jsx)(n.li,{children:"Destination rules"}),"\n",(0,t.jsx)(n.li,{children:"Service entries"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"gateway",children:"Gateway"}),"\n",(0,t.jsxs)(n.p,{children:["The Gateway functions as a sort of a loadbalancer that operates at the edge of the mesh receiving incoming or outgoing HTTP/TCP connections. It's similar to AWS ELB Listener where you define incoming ports, protocol, and TLS termination, etc.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"\r\nSo the main purpose of the gateway resource is to expose a kubernetes service externally if needed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: networking.istio.io/v1alpha3\r\nkind: Gateway\r\nmetadata:\r\n  name: bookinfo-gateway\r\nspec:\r\n  selector:\r\n    istio: ingressgateway\r\n  servers:\r\n  - port:\r\n      number: 80\r\n      name: http\r\n      protocol: HTTP\r\n    hosts:\r\n    - "*"\r\n  - port:\r\n      number: 443\r\n      name: https\r\n      protocol: HTTPS\r\n    hosts:\r\n    - ext-host.example.com\r\n    tls:\r\n      mode: SIMPLE\r\n      credentialName: ext-host-cert    \n'})}),"\n",(0,t.jsx)(n.p,{children:"So in this resource you are setting:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The ports that should be exposed"}),"\n",(0,t.jsx)(n.li,{children:"The type of protocols to use"}),"\n",(0,t.jsx)(n.li,{children:"Enabling TLS termination if needed."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"virtualservice",children:"VirtualService"}),"\n",(0,t.jsx)(n.p,{children:"The Virtual Service functions as a replacement for Kubernetes ingress resource. It lets you configure how requests are routed to a Kubernetes service."}),"\n",(0,t.jsx)(n.p,{children:"Each virtual service consists of a set of routing rules that are evaluated in order, letting Istio match each given request to the virtual service to a specific real destination within the mesh."}),"\n",(0,t.jsx)(n.p,{children:"In the following example, virtual service splitting the coming traffic by routing requests to different versions of a service."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.istio.io/v1alpha3\r\nkind: VirtualService\r\nmetadata:\r\n  name: reviews\r\nspec:\r\n  hosts:\r\n    - reviews\r\n  gateways:\r\n    - bookinfo-gateway\r\n  http:\r\n  - route:\r\n    - destination:\r\n        host: reviews\r\n        subset: v1\r\n      weight: 60\r\n    - destination:\r\n        host: reviews\r\n        subset: v2\r\n      weight: 30\r\n    - destination:\r\n        host: reviews\r\n        subset: v3\r\n      weight: 10     \n"})}),"\n",(0,t.jsx)(n.h3,{id:"destinationrule",children:"DestinationRule"}),"\n",(0,t.jsx)(n.p,{children:"The virtual services are concerned with how traffic is routed to a certain destination, and destination rules are used to configure what happens to traffic for that destination."}),"\n",(0,t.jsx)(n.p,{children:'Destination rules are applied to the "actual" destination of the traffic after virtual service routing rules have been evaluated.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.istio.io/v1alpha3\r\nkind: DestinationRule\r\nmetadata:\r\n  name: reviews\r\nspec:\r\n  host: reviews\r\n  subsets:\r\n  - name: v1\r\n    labels:\r\n      version: v1\r\n  - name: v2\r\n    labels:\r\n      version: v2\r\n    trafficPolicy:\r\n      loadBalancer:\r\n        simple: ROUND_ROBIN\r\n  - name: v3\r\n    labels:\r\n      version: v3\n"})}),"\n",(0,t.jsx)(n.p,{children:"Destination rules are specifically used to specify named service subsets, such as grouping instances of a service by version."}),"\n",(0,t.jsx)(n.p,{children:"You can then use these service subsets in the routing rules of virtual services to control the traffic to different instances of your services as we saw in the above virtualService example."}),"\n",(0,t.jsx)(n.h3,{id:"serviceentry",children:"ServiceEntry"}),"\n",(0,t.jsx)(n.p,{children:"You use a service entry to add an entry to the service registry that Istio maintains internally. After you add the service entry, the Envoy proxies can send traffic to the service as if it was a service in your mesh. Configuring service entries allows you to manage traffic for services running outside of the mesh."}),"\n",(0,t.jsx)(n.p,{children:"The following example mesh-external service entry adds the ext-svc.example.com external dependency to Istio\u2019s service registry:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.istio.io/v1alpha3\r\nkind: ServiceEntry\r\nmetadata:\r\n  name: svc-entry\r\nspec:\r\n  hosts:\r\n  - ext-svc.example.com\r\n  ports:\r\n  - number: 443\r\n    name: https\r\n    protocol: HTTPS\r\n  location: MESH_EXTERNAL\r\n  resolution: DNS\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now, let's get some hands-on and see how those Traffic Management resources work together in Istio"}),"\n",(0,t.jsx)(n.p,{children:"This chapter will show you how you can easily use Istio to control the flow of traffic and API calls between services."}),"\n",(0,t.jsx)(n.p,{children:"Istio simplifies configuration of service-level properties like circuit breakers, timeouts, and retries, and makes it easy to set up important tasks like A/B testing, canary rollouts, and staged rollouts with percentage-based traffic splits."}),"\n",(0,t.jsx)(n.p,{children:"You will understand the following topics by the end of this chapter."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"How to expose a service with ISTIO Ingress Gateway?"}),"\n",(0,t.jsx)(n.li,{children:"How to set up HTTP path Condition Routing?"}),"\n",(0,t.jsx)(n.li,{children:"How to set up Traffic Splitting (Canary, weight-based routing)?"}),"\n",(0,t.jsx)(n.li,{children:"How Identity-Based Routing works."}),"\n",(0,t.jsx)(n.li,{children:"How to Build resilient microservice applications using circuit breaking?"}),"\n",(0,t.jsx)(n.li,{children:"How to enables introducing new features/changes into production with the least amount of risk using Istio Mirroring capability?"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);