"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3976],{1512:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=s(4848),n=s(8453);const o={title:"Overview",sidebar_position:1,weight:10},r=void 0,a={id:"intro",title:"Overview",description:"What is a Service Mesh?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/istio-service-mesh-on-eks/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,weight:10}},h={},c=[{value:"What is a Service Mesh?",id:"what-is-a-service-mesh",level:3},{value:"How ISTIO Works?",id:"how-istio-works",level:3}];function l(e){const t={a:"a",em:"em",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"what-is-a-service-mesh",children:"What is a Service Mesh?"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:['"A service mesh provides a ',(0,i.jsx)(t.strong,{children:"transparent"})," and ",(0,i.jsx)(t.strong,{children:"language-independent"})," way to flexibly and easily ",(0,i.jsx)(t.strong,{children:"automate"}),' application network functions."']})}),"\n",(0,i.jsx)(t.p,{children:"Service Mesh pictures all of your workloads running on a platform, such as Kubernetes."}),"\n",(0,i.jsx)(t.p,{children:"Service mesh lives on top of your workloads through a set of proxies, that allows you to manage network interactions in a very consistent way and it does not modify your workload."}),"\n",(0,i.jsxs)(t.p,{children:["This is what a service mesh is at a high level. There are multiple open-source service mesh tools out there and ",(0,i.jsx)(t.strong,{children:"ISTIO"})," is one of them."]}),"\n",(0,i.jsxs)(t.p,{children:["For more info check out this ",(0,i.jsx)(t.a,{href:"https://istio.io/latest/about/service-mesh/",children:"page"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"how-istio-works",children:"How ISTIO Works?"}),"\n",(0,i.jsx)(t.p,{children:"ISTIO works through a set of sidecar proxies. Those sidecar proxies are the data plane. So in this example, we have a set of pods, and inside of each pod, we have two containers. So those containers can talk to each other over local host."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Istio Architecture",src:s(8727).A+"",width:"928",height:"628"})}),"\n",(0,i.jsx)(t.p,{children:"And what happens is you use Istio to inject proxies into your workloads. And then all subsequent traffic, inbound and outbound, goes through those proxies."}),"\n",(0,i.jsx)(t.p,{children:"Istio configures these proxies using rules that you give it to do very customizable things with Envoy."}),"\n",(0,i.jsx)(t.p,{children:"One key thing to note here is that Istio installs its API on Kubernetes as CRDs. So what this means is that you can interact with your Istio policies, and your rules using kubectl using Kubernetes native tooling."}),"\n",(0,i.jsx)(t.p,{children:"In this workshop will focus on the following topics:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"How ISTIO works?"}),"\n",(0,i.jsx)(t.li,{children:"ISTIO Architecture"}),"\n",(0,i.jsx)(t.li,{children:"Traffic Management"}),"\n",(0,i.jsx)(t.li,{children:"Authentication and Authorization in ISTIO"}),"\n",(0,i.jsx)(t.li,{children:"Using ACM Private CA to Issue SSL/TLS Certs  in ISTIO"}),"\n",(0,i.jsx)(t.li,{children:"Integration with Prometheus and Grafana"}),"\n",(0,i.jsx)(t.li,{children:"Monitoring and Tracing with Jaeger and Kiali."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8727:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/istio-architecture-4f2a5d2b4eb3e695e483305f38a936ed.png"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(6540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);